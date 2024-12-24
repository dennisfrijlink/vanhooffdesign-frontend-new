<script lang="ts">
	import { Navbar } from '$lib/components/Navigation';
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();

	import '../app.css';
	import { Footer } from '$lib/components/Footer';
</script>

<Navbar/>
<main class="min-h-full">
	{@render children()}
</main>
<Footer/>