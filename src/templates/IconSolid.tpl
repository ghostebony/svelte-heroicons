<script lang="ts">
	interface Props {
		/**
		 * @default "currentColor"
		 */
		fill?: string;
		height?: string | number;
		width?: string | number;
		class?: string;
	}

	let { fill = 'currentColor', height = undefined, width = undefined, ...rest }: Props = $props();
</script>

%svg%
