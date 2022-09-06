# svelte-heroicons

## About

[Heroicons](https://github.com/tailwindlabs/heroicons) for Svelte

## Installation

With npm:

```
npm i -D svelte-heroicons
```

With yarn:

```
yarn add -D svelte-heroicons
```

With pnpm:

```
pnpm add -D svelte-heroicons
```

## Usage

### Outline [demo](https://svelte.dev/repl/5cf7f14fcbd84c9bbdf41b98f2da8e42?version=3.50.0)

```svelte
<script>
	// import { AcademicCapIcon } from "svelte-heroicons/20/outline";
	import AcademicCapIcon from "svelte-heroicons/20/outline/academic-cap";
</script>

<AcademicCapIcon />
```

### Solid [demo](https://svelte.dev/repl/1152f4d7febe43c6871445df037feb7a?version=3.50.0)

```svelte
<script>
	// import { AcademicCapIcon } from "svelte-heroicons/20/solid";
	import AcademicCapIcon from "svelte-heroicons/20/solid/academic-cap";
</script>

<AcademicCapIcon />
```

## Props

### Outline

| Property    | Type     | Default          |
| :---------- | :------- | :--------------- |
| stroke      | `string` | `"currentColor"` |
| strokeWidth | `number` | `1.5 `           |

### Solid

| Property | Type     | Default          |
| :------- | :------- | :--------------- |
| fill     | `string` | `"currentColor"` |

## License

[MIT](./LICENSE)
