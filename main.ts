// make.fun entry: Make the AI Judge Laugh — Office Jokes
// Writes one one-line office joke (<200 chars) to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My boss told me to think outside the box, so I moved my desk to the parking lot — now I'm the only one here with a window office.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
console.log(`Wrote ${JOKE.length} characters to /output/entry.txt`);
