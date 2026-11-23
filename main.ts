import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One fixed line, written out in full: no randomness, no network, same bytes every run.
const line =
  "I can turn into any animal I want, but only for three seconds, and only into a slightly confused capybara.";

const outDir = process.env.OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
