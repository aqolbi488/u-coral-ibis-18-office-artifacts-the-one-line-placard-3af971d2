import { mkdirSync, writeFileSync } from "node:fs";

// One-line museum placard for an ordinary office object, written as if the
// object were an ancient artifact: a sticky note, catalogued with a dynasty,
// a date and a material. The sting sits in the last clause: the prayer was
// pinned up to avert meetings, and the meetings came anyway.
const PLACARD =
  "Sticky Note, Third Dynasty of the Cubicle, c. 2021, dyed pulp and failing glue: adhesive prayer, yellowed by nine hundred meetings it failed to prevent.";

// Defensive gate: the entry must be a single non-blank line of 1-180
// characters. Fail loudly instead of writing a broken entry.
if (!PLACARD.trim() || PLACARD.includes("\n") || PLACARD.length > 180) {
  console.error("invalid placard: must be a single non-blank line of 1-180 characters");
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PLACARD, "utf8");
