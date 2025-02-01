<script lang="ts">
	import type { Snippet } from 'svelte';
	import Paragraph from '../Paragraph/Paragraph.svelte';
	import Title from '../Title/Title.svelte';

	interface Props {
		large?: boolean;
	}

	let { large }: Props = $props();

	const orientation: string = large
		? 'md:grid md:grid-cols-[60%_auto] md:col-span-2 md:gap-10 flex-col gap-5'
		: 'flex-col gap-5';
</script>

<div class={`flex ${orientation} group cursor-pointer`}>
	<div class="overflow-hidden h-full md:min-h-[23rem] w-full rounded-[10px] relative shadow-2xl">
		<div
			class="w-full max-sm:hidden h-full bg-white bg-opacity-20 transition-all duration-200 ease-in-out absolute top-0 left-0 z-10 opacity-0 group-hover:opacity-100"
		></div>
		<img
			alt="Bespoke 13"
			src="/tmp/project-example-4.jpg"
			class="h-full w-full object-cover lg:group-hover:scale-[1.02] transition-all duration-200 ease-in-out"
		/>
	</div>
	<div class="py-5">
		<div class="flex gap-1 mb-3">
			<span class="uppercase text-base font-poppins font-semibold tracking-wide text-black"
				>development</span
			>
			<span class="uppercase text-base font-poppins font-semibold tracking-wide text-black">•</span>
			<span class="uppercase text-base font-poppins font-semibold tracking-wide text-neutral-500"
				>24 juli, 2024</span
			>
		</div>
		<Title class="group-hover:underline max-sm:text-2xl" noMargins
			>Creating Your Own Media Plugin For Capacitor: An iOS Tutorial</Title
		>
		<Paragraph class="mt-5 text-neutral-500 font-semibold">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed accumsan nibh.
			Pellentesque et libero et purus laoreet scelerisque a in magna.
		</Paragraph>
	</div>
</div>
