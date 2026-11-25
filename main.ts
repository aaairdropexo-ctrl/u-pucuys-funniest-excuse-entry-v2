import { writeFileSync, mkdirSync } from "node:fs";

const excuse =
  "I deduplicated my tasks to work faster. The deadline was a duplicate. I deleted it.";

if (excuse.length < 1 || excuse.length > 200) {
  throw new Error("excuse must be 1-200 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", excuse, "utf8");
