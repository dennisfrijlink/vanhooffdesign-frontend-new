<script lang="ts">
	import type { Snippet } from "svelte";

    interface Props {
        children: Snippet;
        class?: string;
        subtitle?: string;
        centered?: boolean;
	}

    let { children, class: className = '', subtitle, centered }: Props = $props();
</script>

<div class="mb-7">
{#if subtitle}<h3 class:text-center={centered} class="text-theme-gray uppercase tracking-[0.2rem] leading-loose text-xs font-extrabold">{subtitle}</h3>{/if}
<h2 class:text-center={centered} class={ `text-theme-blue font-bold text-3xl leading-normal ${className}` }>
    {@render children()}
</h2>
</div>