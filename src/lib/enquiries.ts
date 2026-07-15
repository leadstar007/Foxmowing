import { z } from "zod";

const requiredText = (label: string, max = 180) => z.string().trim().min(1, `${label} is required.`).max(max, `${label} is too long.`);
const email = z.email("Enter a valid email address.").trim().max(180);
const phone = z.string().trim().min(8, "Enter a valid phone number.").max(30);
const consent = z.literal(true, { error: "Consent is required before submission." });

export const customerEnquirySchema = z.object({
  enquiryType: z.enum(["residential", "commercial", "general"]),
  service: requiredText("Service"),
  firstName: requiredText("First name", 80),
  lastName: requiredText("Last name", 80),
  email,
  phone,
  address: requiredText("Property address", 240),
  suburb: requiredText("Suburb or town", 100),
  postcode: requiredText("Postcode", 12),
  details: requiredText("Project details", 2500),
  consent,
  website: z.string().max(0, "Automated submission rejected.").optional().default(""),
  turnstileToken: z.string().optional().default(""),
});

export const franchiseEnquirySchema = z.object({
  firstName: requiredText("First name", 80),
  lastName: requiredText("Last name", 80),
  email,
  phone,
  region: requiredText("Preferred region", 100),
  postcode: requiredText("Postcode", 12),
  timeframe: z.enum(["soon", "three-to-six-months", "six-to-twelve-months", "researching"]),
  goals: requiredText("Your goals", 2500),
  consent,
  website: z.string().max(0, "Automated submission rejected.").optional().default(""),
  turnstileToken: z.string().optional().default(""),
});

export type EnquiryKind = "customer" | "franchise";
export type SubmissionDatabase = {
  prepare: (query: string) => { bind: (...values: unknown[]) => { run: () => Promise<unknown> }; run: () => Promise<unknown> };
};

export async function persistSubmission(db: SubmissionDatabase, kind: EnquiryKind, payload: Record<string, unknown>, source: string) {
  await db.prepare(`CREATE TABLE IF NOT EXISTS enquiries (
    id TEXT PRIMARY KEY,
    kind TEXT NOT NULL,
    created_at INTEGER NOT NULL,
    status TEXT NOT NULL DEFAULT 'new',
    source TEXT NOT NULL,
    payload_json TEXT NOT NULL
  )`).run();
  const id = crypto.randomUUID();
  const createdAt = Date.now();
  await db.prepare("INSERT INTO enquiries (id, kind, created_at, status, source, payload_json) VALUES (?, ?, ?, 'new', ?, ?)")
    .bind(id, kind, createdAt, source, JSON.stringify(payload)).run();
  return { id, createdAt };
}

export function publicErrors(error: z.ZodError) {
  return error.issues.reduce<Record<string, string>>((errors, issue) => {
    const field = String(issue.path[0] ?? "form");
    if (!errors[field]) errors[field] = issue.message;
    return errors;
  }, {});
}
