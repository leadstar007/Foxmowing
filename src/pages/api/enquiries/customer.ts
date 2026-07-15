import type { APIRoute } from "astro";
import { handleEnquiry } from "../../../lib/submit-enquiry";
export const prerender = false;
export const POST: APIRoute = (context) => handleEnquiry(context, "customer");

