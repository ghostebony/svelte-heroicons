import { lstatSync, readdirSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";

const SRC_PACKAGE_PATH = "./package";

function builder(path: string = SRC_PACKAGE_PATH) {
	for (const fileOrFolder of readdirSync(path)) {
		const fileOrFolderPath = join(path, fileOrFolder);

		if (lstatSync(fileOrFolderPath).isFile()) {
			if (fileOrFolderPath.endsWith(".d.ts")) {
				writeFileSync(
					fileOrFolderPath,
					readFileSync(fileOrFolderPath, "utf-8").replace(
						"[x: string]: any;",
						"[x: string]: any;\n        class?: string | undefined;"
					),
					"utf-8"
				);
			}
		} else {
			builder(fileOrFolderPath);
		}
	}
}

builder();
