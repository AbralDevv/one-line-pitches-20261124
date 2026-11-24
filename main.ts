import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Pull that idea out of your Notes app, explain it on make.fun like you did over coffee, let an AI agent build a working version of your app—even though you've never coded—and text me the link tonight instead of pitching it next year.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
let target = outDir;
try {
  mkdirSync(target, { recursive: true });
  writeFileSync(`${target}/entry.txt`, line, "utf8");
} catch {
  target = "./output";
  mkdirSync(target, { recursive: true });
  writeFileSync(`${target}/entry.txt`, line, "utf8");
}
