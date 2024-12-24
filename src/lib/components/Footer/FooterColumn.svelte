<script lang="ts">
	import type { Snippet } from 'svelte';

    interface Props {
        children: Snippet;
        name: string;
        class?: string;
	}

    let { children, name, class: className = '' }: Props = $props();
</script>

<div class={`flex-grow mb-10 last-of-type:mb-0 lg:mb-0 ${className}`}>
    <h2 class="text-lg font-semibold">{name}</h2>
	{@render children()}
</div>
