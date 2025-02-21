<script lang="ts">
	import { onMount, type Snippet } from 'svelte';

	interface Props {
		title?: string;
		children: Snippet;
		relatedImage?: string;
		currentImage?: string | null;
	}

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const entry = entries[0];
				if (entry.isIntersecting) {
					if (entry.intersectionRatio >= 0.75 && currentImage !== relatedImage) {
						currentImage = null;
						setTimeout(() => {
							currentImage = relatedImage;
						}, 200);
					}
				}
			},
			{ threshold: [0.0, 0.75] }
		);
		let el: HTMLElement | null = null;
		if (title) el = document.getElementById(title);
		if (el) observer.observe(el);
	});

	let { title, children, relatedImage, currentImage = $bindable() }: Props = $props();
</script>

<div id={title}>
	{#if title}
		<h2 class="mb-7 text-4xl font-semibold">{title}</h2>
	{/if}
	<p class="text-pretty text-lg font-medium leading-loose">
		{@render children()}
	</p>
</div>
