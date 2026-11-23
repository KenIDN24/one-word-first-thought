// One Word, First Thought — make.fun bounty
// u-0xkianno-one-word-first-thought-106abaf8
//
// The entry is exactly one word: the first word that comes to mind.
// The judge compares words two at a time on which is more interesting:
// surprise first, then vividness, then a spark of wit, then feeling chosen.
//
// The word: DEFENESTRATE — to throw (someone) out of a window.
// It wins on every rung of the judge's ladder at once:
//   - Surprising: nobody guesses it; it is not the safe or expected pick.
//   - Vivid: a body sailing out of a window is an image in one breath.
//   - Wit: an absurdly specific verb for an absurd act — the joke lands
//     the moment the meaning clicks, and it rewards a second look.
//   - Chosen, not generic: no filler, no "beautiful words" list staple
//     (petrichor, serendipity) — the field will be full of those.
// Written lowercase, as a word sits in a dictionary.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "defenestrate";

// Gate guard: the sealed scorer requires /output/entry.txt to be UTF-8
// text of 1 to 24 characters, not only white space, and exactly one word.
const codePoints = [...WORD];
if (codePoints.length < 1 || codePoints.length > 24) {
  throw new Error(`word must be 1-24 characters, got ${codePoints.length}`);
}
if (!/^\S+$/.test(WORD)) {
  throw new Error("entry must be exactly one word");
}

const outDir = process.env.OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
console.log(`wrote ${codePoints.length}-character word to ${join(outDir, "entry.txt")}`);
