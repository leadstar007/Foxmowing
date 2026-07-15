import { cp, readdir, rm, stat } from "node:fs/promises";
import { join, relative, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const listFiles = async (directory, root = directory) => {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries.sort((a, b) => a.name.localeCompare(b.name))) {
    const absolutePath = join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...await listFiles(absolutePath, root));
    } else if (entry.isFile()) {
      files.push(relative(root, absolutePath).replaceAll("\\", "/"));
    }
  }

  return files;
};

export const stageManusAssets = async (projectRoot = process.cwd()) => {
  const root = resolve(projectRoot);
  const source = join(root, "dist", "client");
  const target = join(root, "dist", "public");

  const sourceStats = await stat(source).catch(() => null);
  if (!sourceStats?.isDirectory()) {
    throw new Error(`Astro client output is missing at ${source}`);
  }

  const sourceFiles = await listFiles(source);
  if (sourceFiles.length === 0) {
    throw new Error(`Astro client output is empty at ${source}`);
  }

  await rm(target, { recursive: true, force: true });
  await cp(source, target, { recursive: true, force: true, preserveTimestamps: true });

  const targetFiles = await listFiles(target);
  if (JSON.stringify(targetFiles) !== JSON.stringify(sourceFiles)) {
    throw new Error("Staged Manus static assets do not match Astro client output");
  }

  return { source, target, fileCount: sourceFiles.length };
};

const invokedPath = process.argv[1] ? pathToFileURL(resolve(process.argv[1])).href : "";
if (import.meta.url === invokedPath) {
  stageManusAssets(process.argv[2])
    .then(({ fileCount, target }) => {
      console.log(`Staged ${fileCount} static assets for Manus deployment at ${target}.`);
    })
    .catch((error) => {
      console.error(error instanceof Error ? error.message : error);
      process.exitCode = 1;
    });
}
