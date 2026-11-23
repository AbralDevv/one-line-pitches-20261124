// One-line pitch entry for "A Day of One-Line Pitches": writes the pitch
// (one sentence, 207 characters) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

mkdirSync("/output", { recursive: true });
writeFileSync(
  "/output/entry.txt",
  "Just tell make.fun your app idea the way you'd tell a friend, and an AI agent will build a first working version for you — free to try, no code to learn, and if you don't like it, you just say so in words.",
);
