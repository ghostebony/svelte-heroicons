<script lang="ts">
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
		class?: string;
	}

	let {
		stroke = "currentColor",
		strokeWidth = 1.5,
		height = undefined,
		width = undefined,
		...rest
	}: Props = $props();
</script>

%svg%
