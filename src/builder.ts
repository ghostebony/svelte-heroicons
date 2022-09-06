import {
	appendFileSync,
	closeSync,
	existsSync,
	lstatSync,
	mkdirSync,
	openSync,
	readdirSync,
	readFileSync,
	rmSync,
	writeFileSync,
} from "fs";
import { join } from "path";

const IGNORE_FILES_OR_FOLDERS = ["LICENSE", "package.json", "README.md"];

const SRC_HEROICONS_PATH = "./node_modules/heroicons";
const DEST_HEROICONS_PATH = "./src/lib";

const TEMPLATE_PATH = "./src/templates";

const ICON_SOLID_TEMPLATE = readFileSync(TEMPLATE_PATH + "/IconSolid.tpl", "utf-8");
const ICON_OUTLINE_TEMPLATE = readFileSync(TEMPLATE_PATH + "/IconOutline.tpl", "utf-8");
const ICON_EXPORT_TEMPLATE = readFileSync(TEMPLATE_PATH + "/IconExport.tpl", "utf-8");
const ICON_EXPORTS_TEMPLATE = readFileSync(TEMPLATE_PATH + "/IconExports.tpl", "utf-8");

const SVG_SOLID = {
	regex: /<svg (.*?) fill="currentColor" aria-hidden="true">/,
	replacer: (_: unknown, attr: string) =>
		`<svg ${attr} {fill} aria-hidden="true" class={$$$props.class}>`,
};
const SVG_OUTLINE = {
	regex: /<svg (.*?) stroke-width="1.5" stroke="currentColor" aria-hidden="true">/,
	replacer: (_: unknown, attr: string) =>
		`<svg ${attr} stroke-width={strokeWidth} {stroke} aria-hidden="true" class={$$$props.class}>`,
};

existsSync(DEST_HEROICONS_PATH) && rmSync(DEST_HEROICONS_PATH, { recursive: true });

const indexFile = join(DEST_HEROICONS_PATH, "index.js");

if (!existsSync(indexFile)) {
	mkdirSync(DEST_HEROICONS_PATH);
	closeSync(openSync(indexFile, "w"));
}

function main(from = SRC_HEROICONS_PATH, to = DEST_HEROICONS_PATH) {
	!existsSync(to) && mkdirSync(to);

	const isSolid = to.includes("solid");

	const SVG = isSolid ? SVG_SOLID : SVG_OUTLINE;
	const ICON_TEMPLATE = isSolid ? ICON_SOLID_TEMPLATE : ICON_OUTLINE_TEMPLATE;

	for (const fileOrFolder of readdirSync(from)) {
		if (!IGNORE_FILES_OR_FOLDERS.includes(fileOrFolder)) {
			if (lstatSync(join(from, fileOrFolder)).isFile()) {
				const compName = fileOrFolder
					.split("-")
					.map((n) => n.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase()))
					.join("")
					.replace(".svg", "");

				const compFileName = `${compName}.svelte`;

				const compFolderName = fileOrFolder.replace(".svg", "");

				const compFolderPath = join(to, compFolderName);

				!existsSync(compFolderPath) && mkdirSync(compFolderPath);

				writeFileSync(
					join(compFolderPath, compFileName),
					ICON_TEMPLATE.replace(
						"%svg%",
						readFileSync(join(from, fileOrFolder), "utf-8").replace(
							SVG.regex,
							SVG.replacer
						)
					),
					"utf-8"
				);

				writeFileSync(
					join(compFolderPath, "index.ts"),
					ICON_EXPORT_TEMPLATE.replace("%componentName%", compFileName),
					"utf-8"
				);

				appendFileSync(
					join(to, "index.ts"),
					ICON_EXPORTS_TEMPLATE.replace(
						/%(.*?)%/g,
						(_, tplv: "componentName" | "componentFolderName") =>
							({
								componentName: compName,
								componentFolderName: compFolderName,
							}[tplv])
					),
					"utf-8"
				);
			} else {
				main(join(from, fileOrFolder), join(to, fileOrFolder));
			}
		}
	}
}

main();
