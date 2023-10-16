import fs from "fs";
import fse from "fs-extra";

const home = process.env.HOME;
const extensions = `${home}/.vscode/extensions`;
const extension = `${extensions}/broadwaymedia.layout-0.0.1`;
const library = `./extensions/code`;

if (fs.existsSync(extension)) {
  fs.rmSync(extension, { recursive: true });

  console.log("Removing old extension...");

  fs.mkdirSync(extension);

  fse.copySync(library, extension, { overwrite: true })

  console.log("Extension installed...");
} else {
  console.log("Installing extension...");

  fs.mkdirSync(extension);

  fse.copySync(library, extension, { overwrite: true })

  console.log("Extension installed...");
}
