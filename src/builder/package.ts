import { lstatSync, readdirSync } from "fs";
import { join } from "path";

const SRC_PACKAGE_FOLDER = "dist";

const SRC_PACKAGE_PATH = `./${SRC_PACKAGE_FOLDER}`;

const exports: Record<string, { types: string; svelte: string; default: string }> = {};

const typesVersions: Record<string, string[]> = {};

function builder(path: string = SRC_PACKAGE_PATH) {
	for (const fileOrFolder of readdirSync(path)) {
		const fileOrFolderPath = join(path, fileOrFolder);

		if (lstatSync(fileOrFolderPath).isFile()) {
			if (fileOrFolderPath.endsWith(".svelte")) {
				const name = fileOrFolderPath
					.replace(/\\/g, "/")
					.replace(`${SRC_PACKAGE_FOLDER}/`, "");

				const folderName = name.replace(/\/\w+\.svelte$/, "");

				exports[`./${folderName}`] = {
					types: `${SRC_PACKAGE_PATH}/${name}.d.ts`,
					svelte: `${SRC_PACKAGE_PATH}/${name}`,
					default: `${SRC_PACKAGE_PATH}/${name}`,
				};

				exports[`./${name}`] = {
					types: `${SRC_PACKAGE_PATH}/${name}.d.ts`,
					svelte: `${SRC_PACKAGE_PATH}/${name}`,
					default: `${SRC_PACKAGE_PATH}/${name}`,
				};

				typesVersions[name] = [`${SRC_PACKAGE_PATH}/${name}.d.ts`];

				typesVersions[folderName] = [`${SRC_PACKAGE_PATH}/${name}.d.ts`];
			}
		} else {
			builder(fileOrFolderPath);
		}
	}
}
