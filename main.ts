// Two Lines to Your Past Self — make.fun entry program.
// Writes the entry text to $MAKEFUN_OUTPUT_DIR/entry.txt, byte for byte,
// every run. Node 22, standard library only, fully deterministic.

import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The warning itself: line one names the moment (tonight, before the trip),
// line two traces what that one un-backed-up phone will cost. The em dash in
// the first line is written as an escape so its code point (U+2014) is exact.
const ENTRY_TEXT =
  "Back up the photos tonight \u2014 all of them, even the blurry ones of the dog.\n" +
  "The phone will be in a taxi in Lisbon by Friday, and the dog will be gone by winter, and you will describe those photos from memory forever.";

// The grader mounts the output directory itself, so clear only what is
// inside it and never remove the directory. Create it when it is absent.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
for (const name of readdirSync(outputDir)) {
  rmSync(join(outputDir, name), { recursive: true, force: true });
}

writeFileSync(join(outputDir, "entry.txt"), ENTRY_TEXT, "utf8");
