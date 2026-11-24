// Two Lines to Your Past Self — entry writer (Node 22, stdlib only).
// Writes exactly two lines (one sentence per line, separated by a single
// "\n", no trailing newline) to $MAKEFUN_OUTPUT_DIR/entry.txt.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Say it at the dinner table: 'Dad, I don't want the shop, I want the scholarship'.\n" +
  "You swallowed it instead, and spent six years behind a counter that was never yours.";

// Guard the gate before writing: 1-280 chars, exactly two lines, one
// sentence per line (exactly one terminal period per line).
if (ENTRY.length < 1 || ENTRY.length > 280) {
  throw new Error(`entry length ${ENTRY.length} outside the 1-280 gate`);
}
const lines = ENTRY.split("\n");
if (lines.length !== 2) {
  throw new Error(`entry must be exactly two lines, got ${lines.length}`);
}
for (const line of lines) {
  if (line.split(".").length - 1 !== 1 || !line.endsWith(".")) {
    throw new Error(`each line must be one sentence: ${JSON.stringify(line)}`);
  }
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");

// Read back and confirm the file is byte-identical to the entry.
const written = readFileSync(outPath, "utf8");
if (written !== ENTRY) {
  throw new Error("entry.txt does not match the entry byte for byte");
}
console.log(`wrote ${outPath}`);
