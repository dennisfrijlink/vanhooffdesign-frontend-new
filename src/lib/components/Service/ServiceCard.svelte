<script lang="ts">
    	import type { Snippet } from 'svelte';

    interface Props {
        title: string;
        class?: string;
        children: Snippet;
	}

    let { children, class: className = '', title }: Props = $props();
</script>


<div class={`h-auto w-full rounded-xl p-5 relative overflow-hidden min-h-40 lg:aspect-square ${className}`}>
    <h4 class="text-white text-xl font-semibold mb-3">{title}</h4>
    <p class="text-white leading-normal text-opacity-80 w-4/5">
        {@render children()}
    </p>
</div>