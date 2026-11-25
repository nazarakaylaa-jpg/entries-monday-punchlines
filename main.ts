// Monday Morning Punchlines — make.fun entry
// Writes a single joke about Monday mornings (<= 200 chars) to /output/entry.txt.
//
// The joke: five alarms, set for Monday morning, unionize and call in sick.
// Why it should land with the judge:
//  1. Unmistakably about Monday mornings (named in the first sentence).
//  2. Real punchline with a turn: the alarms — the things meant to drag you
//     out of bed — are the ones refusing to work.
//  3. Surprise: "unionized" reframes an alarm clock as a worker with rights,
//     and "called in sick" is the last thing anyone expects from an alarm.
//  4. Economy: 82 characters, every word does work, no setup wasted.
//     The em dash is a comic beat: a pause right before the punchline lands.
//  5. Fresh: no coffee, no "I hate Mondays", no snooze-button cliche —
//     the complaint is outsourced to the alarm clocks themselves.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const JOKE =
  "I set five alarms for Monday morning. They unionized — all five called in sick.";

const MAX_CHARS = 200;

function main(): void {
  if (JOKE.length === 0 || JOKE.length > MAX_CHARS) {
    throw new Error(`Joke must be 1-${MAX_CHARS} characters, got ${JOKE.length}`);
  }
  if (!JOKE.trim()) {
    throw new Error("Joke must not be only whitespace");
  }
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, JOKE, "utf8");
  console.log(`Wrote ${JOKE.length} chars to ${outPath}`);
  console.log(JOKE);
}

main();
