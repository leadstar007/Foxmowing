import type { APIRoute } from "astro";
import { env as cloudflareEnv } from "cloudflare:workers";

export const prerender = false;

type RuntimeEnvironment = Record<string, string | undefined>;

function readRuntimeValue(name: string): string | undefined {
  const workerValue = (cloudflareEnv as unknown as RuntimeEnvironment)[name];
  return workerValue ?? import.meta.env[name];
}

function isSafeStorageKey(key: string): boolean {
  return (
    key.length > 0 &&
    key.length <= 320 &&
    !key.startsWith("/") &&
    !key.includes("..") &&
    /^[A-Za-z0-9][A-Za-z0-9._/-]*$/.test(key)
  );
}

export const GET: APIRoute = async ({ params }) => {
  const key = params.key ?? "";

  if (!isSafeStorageKey(key)) {
    return new Response("Invalid storage key", { status: 400 });
  }

  const forgeBaseUrl = readRuntimeValue("BUILT_IN_FORGE_API_URL")?.replace(/\/+$/, "");
  const forgeKey = readRuntimeValue("BUILT_IN_FORGE_API_KEY");

  if (!forgeBaseUrl || !forgeKey) {
    return new Response("Storage service unavailable", { status: 503 });
  }

  try {
    const forgeUrl = new URL("v1/storage/presign/get", `${forgeBaseUrl}/`);
    forgeUrl.searchParams.set("path", key);

    const forgeResponse = await fetch(forgeUrl, {
      headers: { Authorization: `Bearer ${forgeKey}` },
    });

    if (!forgeResponse.ok) {
      return new Response("Storage backend error", { status: 502 });
    }

    const payload = (await forgeResponse.json()) as { url?: string };
    const signedUrl = payload.url?.replace(/[\r\n]/g, "");
    if (!signedUrl) {
      return new Response("Storage backend returned no asset", { status: 502 });
    }

    const redirectUrl = new URL(signedUrl);
    if (redirectUrl.protocol !== "https:") {
      return new Response("Storage backend returned an invalid asset URL", { status: 502 });
    }

    return new Response(null, {
      status: 307,
      headers: {
        Location: redirectUrl.toString(),
        "Cache-Control": "private, no-store, max-age=0",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch {
    return new Response("Storage proxy error", { status: 502 });
  }
};
