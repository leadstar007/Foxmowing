import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const root = "/home/ubuntu/webdev-static-assets";
const output = path.join(root, "fox-hero-responsive");

await mkdir(output, { recursive: true });

const slides = [
  { id: "residential-operator", source: "fox-hedging.png", position: "centre" },
  { id: "residential-lawn", source: "fox-beautiful-lawn.png", position: "centre" },
  { id: "commercial-grounds", source: "fox-commercial-grounds-hero.jpg", position: "centre" },
  { id: "franchise-team", source: "fox-franchisees.png", position: "centre" },
];

const variants = [
  { suffix: "desktop-1600", width: 1600, height: 900 },
  { suffix: "desktop-1200", width: 1200, height: 675 },
  { suffix: "mobile-900", width: 900, height: 1125 },
  { suffix: "mobile-600", width: 600, height: 750 },
];

for (const slide of slides) {
  for (const variant of variants) {
    const input = path.join(root, slide.source);
    const base = path.join(output, `${slide.id}-${variant.suffix}`);
    const image = sharp(input)
      .rotate()
      .resize(variant.width, variant.height, {
        fit: "cover",
        position: slide.position,
        withoutEnlargement: false,
      });

    await image.clone().avif({ quality: 58, effort: 6 }).toFile(`${base}.avif`);
    await image.clone().webp({ quality: 78, effort: 6 }).toFile(`${base}.webp`);
  }
}

console.log(`Generated ${slides.length * variants.length * 2} responsive hero assets in ${output}`);
