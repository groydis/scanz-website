import { cp, mkdir, readdir, rm, stat } from "node:fs/promises";
import { resolve, relative } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, "..");
const projectRoot = resolve(__dirname, "..");
const sourceRoot = resolve(projectRoot, "content/snip/_images");
const outputRoot = resolve(projectRoot, "public/snip-images");
const maxSizeBytes = 1.5 * 1024 * 1024;

async function exists(path) {
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
}

async function walkWarnings(dir, warnings) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = resolve(dir, entry.name);
    if (/[A-Z]/.test(entry.name)) {
      warnings.push(`Uppercase name: ${relative(projectRoot, fullPath)}`);
    }
    if (/\s/.test(entry.name)) {
      warnings.push(`Name contains spaces: ${relative(projectRoot, fullPath)}`);
    }

    if (entry.isDirectory()) {
      await walkWarnings(fullPath, warnings);
      continue;
    }

    if (entry.isFile()) {
      const fileStat = await stat(fullPath);
      if (fileStat.size > maxSizeBytes) {
        warnings.push(
          `Large image (${Math.round(fileStat.size / 1024)}KB): ${relative(projectRoot, fullPath)}`,
        );
      }
    }
  }
}

async function syncSnipImages() {
  await mkdir(outputRoot, { recursive: true });

  if (!(await exists(sourceRoot))) {
    await rm(outputRoot, { recursive: true, force: true });
    await mkdir(outputRoot, { recursive: true });
    console.log("No content/snip/_images directory found. Created empty public/snip-images.");
    return;
  }

  const warnings = [];
  await walkWarnings(sourceRoot, warnings);

  await rm(outputRoot, { recursive: true, force: true });
  await mkdir(outputRoot, { recursive: true });
  await cp(sourceRoot, outputRoot, { recursive: true });

  console.log(
    `Synced SNIP images: ${relative(projectRoot, sourceRoot)} -> ${relative(projectRoot, outputRoot)}`,
  );

  if (warnings.length) {
    console.warn("SNIP image warnings:");
    for (const warning of warnings) {
      console.warn(`- ${warning}`);
    }
  }
}

syncSnipImages().catch((error) => {
  console.error("Failed to sync SNIP images.");
  console.error(error);
  process.exit(1);
});
