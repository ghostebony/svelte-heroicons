<script lang="ts">
	import type { ClassValue } from 'svelte/elements';

	interface Props {
		/**
		 * @default "currentColor"
		 */
		stroke?: string;
		/**
		 * @default 1.5
		 */
		strokeWidth?: number;
		height?: string | number;
		width?: string | number;
		class?: ClassValue;
	}

	let {
		stroke = 'currentColor',
		strokeWidth = 1.5,
		height = undefined,
		width = undefined,
		...rest
	}: Props = $props();
</script>

%svg%
