import { spawnSync } from "node:child_process";
import { mkdtemp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { afterEach, describe, expect, it } from "vitest";

const scriptPath = fileURLToPath(new URL("../scripts/stage-manus-assets.mjs", import.meta.url));
const temporaryRoots: string[] = [];

const writeFixture = async (path: string, content: string) => {
  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, content);
};

afterEach(async () => {
  await Promise.all(temporaryRoots.splice(0).map((root) => rm(root, { recursive: true, force: true })));
});

describe("Manus deployment asset staging", () => {
  it("mirrors Astro client assets, removes stale public files, and preserves Worker output", async () => {
    const root = await mkdtemp(join(tmpdir(), "fox-manus-stage-"));
    temporaryRoots.push(root);

    await writeFixture(join(root, "dist/client/index.html"), "<main>Fox</main>");
    await writeFixture(join(root, "dist/client/_astro/site.css"), "body{color:#111}");
    await writeFixture(join(root, "dist/public/stale.txt"), "remove me");
    await writeFixture(join(root, "dist/server/entry.mjs"), "export default {};");

    const result = spawnSync(process.execPath, [scriptPath, root], { encoding: "utf8" });

    expect(result.status, result.stderr).toBe(0);
    await expect(readFile(join(root, "dist/public/index.html"), "utf8")).resolves.toBe("<main>Fox</main>");
    await expect(readFile(join(root, "dist/public/_astro/site.css"), "utf8")).resolves.toBe("body{color:#111}");
    await expect(readFile(join(root, "dist/server/entry.mjs"), "utf8")).resolves.toBe("export default {};");
    await expect(readFile(join(root, "dist/public/stale.txt"), "utf8")).rejects.toThrow();
    await expect(readFile(join(root, "dist/client/index.html"), "utf8")).resolves.toBe("<main>Fox</main>");
  });

  it("fails clearly when Astro client output is missing", async () => {
    const root = await mkdtemp(join(tmpdir(), "fox-manus-stage-missing-"));
    temporaryRoots.push(root);

    const result = spawnSync(process.execPath, [scriptPath, root], { encoding: "utf8" });

    expect(result.status).toBe(1);
    expect(result.stderr).toContain("Astro client output is missing");
  });
});
