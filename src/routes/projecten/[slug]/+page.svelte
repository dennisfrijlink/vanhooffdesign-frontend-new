<script lang="ts">
	import { Container } from '$lib/components/Container';
	import { fade } from 'svelte/transition';
	import { ChevronRight } from 'lucide-svelte';
	import Property from './components/Property.svelte';
	import Paragraph from './components/Paragraph.svelte';

	const images: string[] = [
		'/tmp/project-example-5.jpg',
		'/tmp/project-example-6.jpg',
		'/tmp/project-example-7.jpg'
	];
	let currentImage: string = '/tmp/project-example-5.jpg';
</script>

<svelte:head>
	<style>
		html {
			@apply bg-[#E8E9EA];
		}
	</style>
</svelte:head>

<div class="relative h-[45rem] w-full lg:h-[100svh]">
	<div
		class="absolute left-0 top-0 flex h-full w-full flex-col justify-center bg-black/50 lg:items-center"
	>
		<Container class="text-center">
			<ol class="my-4 flex justify-center gap-2">
				<li class="flex items-center gap-2">
					<a
						class="text-xs font-extrabold uppercase leading-loose tracking-[0.2rem] text-white opacity-80 hover:opacity-100"
						href="/projecten"
					>
						<span>projecten</span>
					</a>
					<ChevronRight class="h-5 w-auto stroke-white stroke-[3px]" />
				</li>
				<a
					class="text-xs font-extrabold uppercase leading-loose tracking-[0.2rem] text-white opacity-80 hover:opacity-100"
					href={window.location.href}
				>
					<li>alles mag open</li>
				</a>
			</ol>
			<h1 class="mb-8 font-poppins text-3xl font-semibold text-white lg:text-6xl">
				Alles mag open
			</h1>
			<p
				class="mx-auto text-pretty text-base font-medium leading-loose text-white md:w-3/4 lg:w-1/2"
			>
				Eefje en Jack hadden behoefte een extra (tuin)kamer die buiten naar binnen trekt. De keuken
				was ook nodig aan vervanging toe. Hiervoor is een gave maatwerkkeuken ontworpen.
			</p>
		</Container>
	</div>
	<img alt="Bespoke 13" src="/tmp/project-example-7.jpg" class="h-full w-full object-cover" />
</div>

<Container>
	<ul class="mb-10 flex gap-5 lg:gap-0 flex-col lg:flex-row lg:justify-evenly">
		<Property content="2022" description="jaar" />
		<Property content="Buren" description="locatie" />
		<Property content="Piet & Jan" description="opdrachtgever" />
		<Property content="Renovatie en Uitbouw" description="particulier" />
	</ul>
	<img class="rounded-2xl" src="/tmp/project-example-4.jpg" alt="" />
</Container>
<Container>
	<div class="flex flex-col-reverse max-lg:gap-24 lg:grid lg:grid-cols-[auto_60%] xl:grid-cols-2">
		<div class="relative max-md:hidden">
			{#each images as image, index}
				{#if currentImage === image}
					<img
						class="h-[30rem] absolute rounded-2xl object-cover"
						style="transform: translateY({index * 480 + 50}px);"
						src={image}
						alt=""
						transition:fade={{ duration: 100 }}
					/>
				{/if}
			{/each}
		</div>
		<div class="lg:hidden flex flex-col gap-10">
			{#each images as image}
					<img
						class="h-[20rem] rounded-lg object-cover"
						src={image}
						alt=""
					/>
			{/each}
		</div>
		<div class="flex flex-col gap-20 lg:pl-20 xl:pl-40">
			<Paragraph title="De vraag" relatedImage="/tmp/project-example-5.jpg" bind:currentImage>
				Voor dit project kregen we de opdracht om een gezinswoning te ontwerpen die zowel
				functioneel als esthetisch aantrekkelijk is. De wensen van de opdrachtgevers waren helder:
				een open leefruimte, een ruime keuken, vier slaapkamers en een grote tuin. We hebben deze
				wensen vertaald naar een ontwerp met een moderne architectuur en een warme uitstraling.
				<br /><br />
				Bijzondere aandacht is besteed aan de lichtinval en de routing in het huis. Grote ramen zorgen
				voor veel natuurlijk licht en een open verbinding met de tuin. De indeling is logisch en praktisch,
				met voldoende privacy voor alle gezinsleden.
			</Paragraph>
			<Paragraph title="Het proces" relatedImage="/tmp/project-example-6.jpg" bind:currentImage>
				Voor dit project kregen we de opdracht om een gezinswoning te ontwerpen die zowel
				functioneel als esthetisch aantrekkelijk is. De wensen van de opdrachtgevers waren helder:
				een open leefruimte, een ruime keuken, vier slaapkamers en een grote tuin. We hebben deze
				wensen vertaald naar een ontwerp met een moderne architectuur en een warme uitstraling.
			</Paragraph>
			<Paragraph title="Het resultaat" relatedImage="/tmp/project-example-7.jpg" bind:currentImage>
				Voor dit project kregen we de opdracht om een gezinswoning te ontwerpen die zowel
				functioneel als esthetisch aantrekkelijk is. De wensen van de opdrachtgevers waren helder:
				een open leefruimte, een ruime keuken, vier slaapkamers en een grote tuin. We hebben deze
				wensen vertaald naar een ontwerp met een moderne architectuur en een warme uitstraling.
			</Paragraph>
		</div>
	</div>
</Container>
