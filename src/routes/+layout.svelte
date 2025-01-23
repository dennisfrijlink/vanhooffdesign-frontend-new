<script lang="ts">
	import { Navbar } from '$lib/components/Navigation';
	import { Footer } from '$lib/components/Footer';
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();

	import '../app.css';
</script>

<Navbar/>
<main>
	{@render children()}
</main>
<Footer/>