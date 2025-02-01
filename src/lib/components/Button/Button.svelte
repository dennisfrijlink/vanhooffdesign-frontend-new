<script lang="ts">
	import { Button } from 'bits-ui';
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
		class?: string;
	}

	let { children, class: className = '' }: Props = $props();
</script>

<Button.Root
	class={`flex w-full justify-center gap-[10px] rounded-full bg-theme-blue px-8 py-3 font-medium text-white transition-all duration-100 ease-linear lg:w-auto lg:hover:bg-theme-blue-light ${className}`}
>
	{@render children()}
</Button.Root>
