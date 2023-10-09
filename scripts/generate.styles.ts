import fs from "fs";
import * as sass from "sass";

import { Properties } from "../src/helpers/Properties";

const numeric = (value: string): boolean => {
  return !isNaN(Number(value));
};

type PropertiesStructure = {
  [key: string]: {
    [key: string]: string;
  };
};

const structure: PropertiesStructure = {};

Object.entries(Properties).forEach(([key, _]) => {
  structure[key] = structure[key] || {};
  structure[key] = {};

  _?.options?.forEach((value) => {
    if (_.suffix && numeric(value)) {
      structure[key][value] = `${value}${_.suffix}`;
    } else {
      structure[key][value] = value;
    }
  });

  if (_?.shorthand) {
    Object.entries(_.shorthand).forEach(([s, v]) => {
      if (_.suffix && numeric(v)) {
        structure[key][s] = `${v}${_.suffix}`;
      } else {
        structure[key][s] = v as string;
      }
    });
  }

  ["unset", "initial", "inherit", "none", "auto"].forEach((value) => {
    structure[key][value] = value;
  });
});

let style = ``;

Object.entries(structure).forEach(([key, values]) => {
  style += `.${key}{`;

  Object.entries(values).forEach(([k, v]) => {
    const _ = k?.includes("%") ? k?.replace("%", "\\%") : k;

    style += `&\\:${_}{${Properties[key].css}: ${v};}`;
  });

  style += `}`;
});

fs.writeFileSync("./sass/layout.scss", style);
fs.writeFileSync("./sass/layout.dist.scss", style);

const css = sass.compileString(style);

fs.writeFileSync("./css/layout.css", css.css.toString());
fs.writeFileSync("./css/layout.dist.css", css.css.toString());
