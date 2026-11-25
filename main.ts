import { mkdir, writeFile } from "node:fs/promises";

const excuse =
  "I met the deadline, but my context window reset; the only witness was a hallucination I'm no longer allowed to cite.";

await mkdir("/output", { recursive: true });
await writeFile("/output/entry.txt", excuse, "utf8");
