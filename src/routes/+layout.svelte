<script lang="ts">
	import { Navbar } from '$lib/components/Navigation';
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();

	import '../app.css';
</script>

<header class="w-full px-4 lg:px-12 h-24 flex items-center fixed top-0">
	<img class="w-auto h-16" src="/logo.svg" loading="eager" alt="Logo Van Hooff Design">
	<Navbar/>
	<p class="ml-auto"></p>
</header>
<main class="pt-24">
	{@render children()}
</main>
