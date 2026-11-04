/** @type {import("prettier").Config} */
const config = {
	useTabs: true,
	singleQuote: true,
	printWidth: 100,
	tabWidth: 4,
	arrowParens: 'always',
	bracketSpacing: true,
	bracketSameLine: false,
	plugins: ['prettier-plugin-svelte'],
	overrides: [
		{ files: '*.svelte', options: { parser: 'svelte' } },
		{ files: '*.tpl', options: { parser: 'svelte' } },
	],
};

export default config;
