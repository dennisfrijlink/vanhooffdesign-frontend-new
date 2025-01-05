<script lang="ts">
	import { Button } from '$lib/components/Button';
	import { Container } from '$lib/components/Container';
	import { ChevronRight, MoveRight } from 'lucide-svelte';
	import Property from './components/Property.svelte';
	import Paragraph from './components/Paragraph.svelte';
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
	<img class="rounded-2xl" src="/tmp/project-example-4.jpg" alt="" />
</Container>
<Container>
	<div class="lg:grid lg:grid-cols-[60%_auto] xl:grid-cols-[70%_auto] flex flex-col-reverse max-lg:gap-24">
		<div class="xl:pr-40 lg:pr-20 flex flex-col gap-10">
			<Paragraph title="De vraag">
				Voor dit project kregen we de opdracht om een gezinswoning te ontwerpen die zowel
				functioneel als esthetisch aantrekkelijk is. De wensen van de opdrachtgevers waren helder:
				een open leefruimte, een ruime keuken, vier slaapkamers en een grote tuin. We hebben deze
				wensen vertaald naar een ontwerp met een moderne architectuur en een warme uitstraling.
				<br/><br/>
				Bijzondere aandacht is besteed aan de lichtinval en de routing in het huis. Grote ramen
				zorgen voor veel natuurlijk licht en een open verbinding met de tuin. De indeling is logisch
				en praktisch, met voldoende privacy voor alle gezinsleden.
			</Paragraph>
			<img src="/tmp/project-example-5.jpg" alt="" />
			<Paragraph title="Het resultaat">
				Voor dit project kregen we de opdracht om een gezinswoning te ontwerpen die zowel
				functioneel als esthetisch aantrekkelijk is. De wensen van de opdrachtgevers waren helder:
				een open leefruimte, een ruime keuken, vier slaapkamers en een grote tuin. We hebben deze
				wensen vertaald naar een ontwerp met een moderne architectuur en een warme uitstraling.
			</Paragraph>
			<img src="/tmp/project-example-6.jpg" alt="" />
			<img src="/tmp/project-example-7.jpg" alt="" />
		</div>
		<div
			class="relative lg:self-start overflow-hidden rounded-lg bg-theme-blue p-10 shadow-xl lg:sticky lg:top-10"
		>
			<ul class="relative z-20 max-lg:grid grid-cols-1 md:grid-cols-2 max-lg:gap-8">
				<Property content="2022" description="jaar" />
				<Property content="Buren" description="locatie" />
				<Property content="Piet & Jan" description="opdrachtgever" />
				<Property content="Renovatie en Uitbouw" description="particulier" />
			</ul>
			<img
				alt="Van Hooff Design Icoon"
				src="/icon-white.svg"
				class="absolute bottom-0 right-0 z-10 h-auto w-56 translate-x-1/3 translate-y-1/3 opacity-20"
			/>
		</div>
	</div>
</Container>
