import { describe, expect, it } from "vitest";
import { customerEnquirySchema, franchiseEnquirySchema, persistSubmission } from "../src/lib/enquiries";

describe("customerEnquirySchema", () => {
  const valid = {
    enquiryType: "residential",
    service: "lawn-mowing",
    firstName: "Alex",
    lastName: "Taylor",
    email: "alex@example.com",
    phone: "0412345678",
    address: "10 Sample Street",
    suburb: "Geelong",
    postcode: "3220",
    details: "Fortnightly lawn mowing for a suburban block.",
    consent: true,
    website: "",
    turnstileToken: "",
  } as const;

  it("accepts a complete residential quote", () => {
    expect(customerEnquirySchema.safeParse(valid).success).toBe(true);
  });

  it("rejects honeypot content and missing consent", () => {
    const result = customerEnquirySchema.safeParse({ ...valid, website: "spam.example", consent: false });
    expect(result.success).toBe(false);
  });

  it("rejects malformed contact details", () => {
    const result = customerEnquirySchema.safeParse({ ...valid, email: "not-an-email", phone: "123" });
    expect(result.success).toBe(false);
  });
});

describe("franchiseEnquirySchema", () => {
  it("keeps franchise fields distinct from customer quote fields", () => {
    const result = franchiseEnquirySchema.safeParse({
      firstName: "Sam", lastName: "Morgan", email: "sam@example.com", phone: "0299999999",
      region: "nsw", postcode: "2000", timeframe: "researching",
      goals: "I am researching a supported local outdoor-services business.", consent: true, website: "", turnstileToken: "",
    });
    expect(result.success).toBe(true);
    if (result.success) expect(result.data).not.toHaveProperty("service");
  });
});

describe("persistSubmission", () => {
  it("creates storage and inserts a redacted JSON payload", async () => {
    const calls: Array<{ query: string; values: unknown[] }> = [];
    const db = {
      prepare(query: string) {
        return {
          run: async () => { calls.push({ query, values: [] }); },
          bind: (...values: unknown[]) => ({ run: async () => { calls.push({ query, values }); } }),
        };
      },
    };
    const result = await persistSubmission(db, "customer", { firstName: "Alex" }, "foxmowing.com.au");
    expect(result.id).toMatch(/^[0-9a-f-]{36}$/);
    expect(calls).toHaveLength(2);
    expect(calls[1].query).toContain("INSERT INTO enquiries");
    expect(calls[1].values[1]).toBe("customer");
    expect(calls[1].values[4]).toBe('{"firstName":"Alex"}');
  });
});

