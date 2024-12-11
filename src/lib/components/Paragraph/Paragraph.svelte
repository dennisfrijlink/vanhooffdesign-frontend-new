<script lang="ts">
	import type { Snippet } from "svelte";

    interface Props {
        children: Snippet;
        class?: string;
	}

    let { children, class: className = '' }: Props = $props();
</script>

<p class={ `text-black font-medium text-base leading-loose ${className}` }>
    {@render children()}
</p>
