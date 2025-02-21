<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
		class?: string;
		fluid?: boolean;
	}

	let { children, class: className = '', fluid }: Props = $props();

	const defaultClass = fluid ? 'w-4/5' : 'max-w-7xl w-full';
</script>

<div class={`mx-auto px-5 my-20 md:mb-24 lg:my-40 ${defaultClass} ${className}`}>
	{@render children()}
</div>
