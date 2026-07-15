import type { APIContext } from "astro";
import { env as cloudflareEnv } from "cloudflare:workers";
import { customerEnquirySchema, franchiseEnquirySchema, persistSubmission, publicErrors, type SubmissionDatabase } from "./enquiries";

type RuntimeEnv = {
  ENQUIRIES_DB?: SubmissionDatabase;
  TURNSTILE_SECRET_KEY?: string;
  CRM_WEBHOOK_URL?: string;
  NOTIFICATION_WEBHOOK_URL?: string;
};

function json(body: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" } });
}

async function verifyTurnstile(secret: string, token: string, ip?: string) {
  if (!token) return false;
  const body = new URLSearchParams({ secret, response: token });
  if (ip) body.set("remoteip", ip);
  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", { method: "POST", body });
  if (!response.ok) return false;
  const result = await response.json() as { success?: boolean };
  return result.success === true;
}

export async function handleEnquiry(context: APIContext, kind: "customer" | "franchise") {
  if (context.request.headers.get("content-type")?.includes("application/json") !== true) return json({ ok: false, message: "Send JSON form data." }, 415);
  let raw: unknown;
  try { raw = await context.request.json(); } catch { return json({ ok: false, message: "The submission could not be read." }, 400); }
  const schema = kind === "customer" ? customerEnquirySchema : franchiseEnquirySchema;
  const parsed = schema.safeParse(raw);
  if (!parsed.success) return json({ ok: false, message: "Check the highlighted fields.", errors: publicErrors(parsed.error) }, 422);
  const workerEnv = cloudflareEnv as unknown as RuntimeEnv;
  const env: RuntimeEnv = {
    ENQUIRIES_DB: workerEnv.ENQUIRIES_DB,
    TURNSTILE_SECRET_KEY: workerEnv.TURNSTILE_SECRET_KEY ?? import.meta.env.TURNSTILE_SECRET_KEY,
    CRM_WEBHOOK_URL: workerEnv.CRM_WEBHOOK_URL ?? import.meta.env.CRM_WEBHOOK_URL,
    NOTIFICATION_WEBHOOK_URL: workerEnv.NOTIFICATION_WEBHOOK_URL ?? import.meta.env.NOTIFICATION_WEBHOOK_URL,
  };
  if (env.TURNSTILE_SECRET_KEY) {
    const valid = await verifyTurnstile(env.TURNSTILE_SECRET_KEY, parsed.data.turnstileToken, context.clientAddress);
    if (!valid) return json({ ok: false, message: "Security verification failed. Refresh the page and try again." }, 403);
  }
  if (!env.ENQUIRIES_DB) return json({ ok: false, message: "Enquiry storage is not configured. Please call Fox instead." }, 503);
  const { website: _honeypot, turnstileToken: _token, ...safePayload } = parsed.data;
  const source = new URL(context.request.url).hostname;
  try {
    const stored = await persistSubmission(env.ENQUIRIES_DB, kind, safePayload, source);
    const webhookBody = JSON.stringify({ id: stored.id, kind, createdAt: stored.createdAt, data: safePayload });
    const hooks = [env.CRM_WEBHOOK_URL, env.NOTIFICATION_WEBHOOK_URL].filter(Boolean) as string[];
    await Promise.allSettled(hooks.map((url) => fetch(url, { method: "POST", headers: { "content-type": "application/json" }, body: webhookBody })));
    console.info(JSON.stringify({ event: "enquiry_saved", id: stored.id, kind, createdAt: stored.createdAt }));
    return json({ ok: true, id: stored.id, redirect: kind === "customer" ? "/quote-success" : "/franchise-enquiry-success" });
  } catch (error) {
    console.error(JSON.stringify({ event: "enquiry_save_failed", kind, reason: error instanceof Error ? error.name : "unknown" }));
    return json({ ok: false, message: "The enquiry could not be saved. Please try again or call Fox." }, 500);
  }
}
