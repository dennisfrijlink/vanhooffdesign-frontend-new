<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		title?: string;
		children: Snippet;
	}

	let { title, children }: Props = $props();
</script>

<div>
{#if title}
	<h2 class="text-4xl font-semibold mb-7">{title}</h2>
{/if}
<p class="text-lg leading-loose font-medium text-pretty">
	{@render children()}
</p>
</div>
