import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://foxmowing.com.au",
  output: "static",
  adapter: cloudflare({ imageService: "compile" }),
  integrations: [sitemap()],
  build: { format: "directory" },
  vite: {
    server: {
      allowedHosts: ["localhost", "127.0.0.1", ".manus.computer"],
    },
  },
  redirects: {
    "/get-a-quote": "/free-quote",
    "/franchise": "/join-fox-team",
    "/our-services": "/services"
  }
});
