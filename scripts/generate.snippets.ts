import fs from "fs";

import { Properties } from "../lib/helpers/Properties";

type Snippets = {
  [key: string]: {
    prefix: string[];
    body: string[];
    description: string;
  };
};
const snippets: Snippets = {};

Object.entries(Properties).forEach(([key, value]) => {
  const ko: string[] = value.suffix
    ? []
    : value.options?.map((o) => `${key}:${o}`) || [];
  const ks: string[] = value.suffix
    ? []
    : value.shorthand
    ? Object.entries(value.shorthand).map(([k]) => `${key}:${k}`)
    : [];
  const co: string[] = value.suffix
    ? []
    : value.options?.map((o) => `${value.css}:${o}`) || [];

  const combined = [...ko, ...ks, ...co];

  const description = (c: string) => {
    if (c.includes(":")) {
      const [k, v] = c.split(":");

      const css = key === k ? value.css : k;
      const option = value.options?.includes(v)
        ? v
        : Properties[k].shorthand?.[v] || v;

      return `${css?.replace("-", " ")} ${option?.replace("-", " ")}`;
    }
    return `${c}`;
  };

  combined.map((c) => {
    snippets[c] = {
      prefix: [c],
      body: [c],
      description: description(c),
    };
  });

  if (!value.options || value.suffix) {
    snippets[`${key}:*`] = {
      prefix: [`${key}:`],
      body: [`${key}:$1`],
      description: `${value.css.replace("-", " ")} *`,
    };
    snippets[`${value.css}:*`] = {
      prefix: [`${value.css}:`],
      body: [`${value.css}:$1`],
      description: `${value.css.replace("-", " ")} *`,
    };
  }
});

fs.writeFileSync(
  "./extensions/code/snippets/snippets.code-snippets",
  JSON.stringify(snippets, null, 2)
);
