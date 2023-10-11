import fs from "fs";

import { Properties } from "../lib/helpers/Properties";

let parsing =
  fs.readFileSync("./scripts/assets/parsing.md", "utf8") + "\n";

Object.entries(Properties).forEach(([key, value]) => {
  const row: string[] = [
    value.css,
    value.jsx,
    value?.suffix ? "..." : value?.options?.join(", ") || "...",
    key,
    value?.shorthand
      ? Object.entries(value.shorthand)?.map(([key]) => key)?.join(", ")
      : "...",
  ];
  
  parsing += `| ${row.join(" | ")} |\n`;
});

fs.writeFileSync("./docs/parsing.md", parsing);
