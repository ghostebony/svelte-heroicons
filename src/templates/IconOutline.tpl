<script lang="ts">
	interface $$Props {
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

	/**
	 * @default "currentColor"
	 */
	export let stroke = "currentColor";

	/**
	 * @default 1.5
	 */
	export let strokeWidth = 1.5;

	export let height: string | number | undefined = undefined;

	export let width: string | number | undefined = undefined;
</script>

%svg%
