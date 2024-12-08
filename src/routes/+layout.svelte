<script lang="ts">
	import { Navbar } from '$lib/components/Navigation';
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();

	import '../app.css';
</script>

<Navbar/>
<main class="h-full">
	{@render children()}
</main>
