# @ghostebony/svelte-heroicons

## About

[Heroicons](https://github.com/tailwindlabs/heroicons) for Svelte

## Installation

With npm:

```
npm i -D @ghostebony/svelte-heroicons
```

With yarn:

```
yarn add -D @ghostebony/svelte-heroicons
```

With pnpm:

```
pnpm add -D @ghostebony/svelte-heroicons
```

## Usage

### Outline [demo](https://svelte.dev/repl/5cf7f14fcbd84c9bbdf41b98f2da8e42?version=3.50.0)

```svelte
<script>
	// import { AcademicCapIcon } from "@ghostebony/svelte-heroicons/24/outline";
	import AcademicCapIcon from "@ghostebony/svelte-heroicons/24/outline/AcademicCap";
</script>

<AcademicCapIcon />
```

### Solid [demo](https://svelte.dev/repl/1152f4d7febe43c6871445df037feb7a?version=3.50.0)

```svelte
<script>
	// import { AcademicCapIcon } from "@ghostebony/svelte-heroicons/24/solid";
	import AcademicCapIcon from "@ghostebony/svelte-heroicons/24/solid/AcademicCap";
</script>

<AcademicCapIcon />
```

### Solid Mini [demo](https://svelte.dev/repl/8f1845d1ce364c099b4ecf1bc9ac9b5d?version=3.50.0)

```svelte
<script>
	// import { AcademicCapIcon } from "@ghostebony/svelte-heroicons/20/solid";
	import AcademicCapIcon from "@ghostebony/svelte-heroicons/20/solid/AcademicCap";
</script>

<AcademicCapIcon />
```

## Props

### Outline

| Property    | Type               | Default          |
| :---------- | :----------------- | :--------------- |
| stroke      | `string`           | `"currentColor"` |
| strokeWidth | `number`           | `1.5 `           |
| height      | `number \| string` | `undefined`      |
| width       | `number \| string` | `undefined`      |

### Solid

| Property | Type               | Default          |
| :------- | :----------------- | :--------------- |
| fill     | `string`           | `"currentColor"` |
| height   | `number \| string` | `undefined`      |
| width    | `number \| string` | `undefined`      |

## License

[MIT](./LICENSE)
