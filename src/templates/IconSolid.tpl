<script lang="ts">
	import type { ClassValue } from 'svelte/elements';

	interface Props {
		/**
		 * @default "currentColor"
		 */
		fill?: string;
		height?: string | number;
		width?: string | number;
		class?: ClassValue;
	}

	let { fill = 'currentColor', height = undefined, width = undefined, ...rest }: Props = $props();
</script>

%svg%
