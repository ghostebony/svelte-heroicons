import {
	appendFileSync,
	existsSync,
	lstatSync,
	mkdirSync,
	readdirSync,
	readFileSync,
	writeFileSync,
} from 'fs';
import { join } from 'path';
import { IGNORE_FILES_OR_FOLDERS, TEMPLATE_PATH } from './constants';

const ICON_SOLID_TEMPLATE = readFileSync(TEMPLATE_PATH + '/IconSolid.tpl', 'utf-8');
const ICON_OUTLINE_TEMPLATE = readFileSync(TEMPLATE_PATH + '/IconOutline.tpl', 'utf-8');
const ICON_EXPORT_TEMPLATE = readFileSync(TEMPLATE_PATH + '/IconExport.tpl', 'utf-8');

const SVG_SOLID = {
	regex: /<svg (.*?) fill="currentColor" aria-hidden="true" data-slot="icon">/,
	replacer: (_: unknown, attr: string) =>
		`<svg ${attr} {fill} {height} {width} aria-hidden="true" {...rest}>`,
};
const SVG_OUTLINE = {
	regex: /<svg (.*?) stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">/,
	replacer: (_: unknown, attr: string) =>
		`<svg ${attr} stroke-width={strokeWidth} {stroke} {height} {width} aria-hidden="true" {...rest}>`,
};

export function builder(from: string, to: string) {
	if (!existsSync(to)) {
		mkdirSync(to, { recursive: true });
	}

	const [SVG, ICON_TEMPLATE] = to.includes('solid')
		? [SVG_SOLID, ICON_SOLID_TEMPLATE]
		: [SVG_OUTLINE, ICON_OUTLINE_TEMPLATE];

	for (const fileOrFolder of readdirSync(from)) {
		if (IGNORE_FILES_OR_FOLDERS.includes(fileOrFolder)) {
			continue;
		}

		if (!lstatSync(join(from, fileOrFolder)).isFile()) {
			builder(join(from, fileOrFolder), join(to, fileOrFolder));

			continue;
		}

		const compName = fileOrFolder
			.split('-')
			.map((n) => n.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase()))
			.join('')
			.replace('.svg', '');

		writeFileSync(
			join(to, `${compName}.svelte`),
			ICON_TEMPLATE.replace(
				'%svg%',
				readFileSync(join(from, fileOrFolder), 'utf-8').replace(SVG.regex, SVG.replacer),
			),
			'utf-8',
		);

		appendFileSync(
			join(to, 'index.ts'),
			ICON_EXPORT_TEMPLATE.replaceAll('%componentName%', compName),
			'utf-8',
		);
	}
}
