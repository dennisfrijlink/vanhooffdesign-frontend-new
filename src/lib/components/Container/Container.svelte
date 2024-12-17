<script lang="ts">
	import type { Snippet } from 'svelte';

    interface Props {
        children: Snippet;
        class?: string;
	}

    let { children, class: className = '' }: Props = $props();
</script>

<div class={`mx-auto w-full max-w-7xl px-5 my-20 md:my-24 lg:my-40 ${className}`}>
	{@render children()}
</div>
