<script lang="ts">
	import { Button } from '$lib/components/Button';
	import { Container } from '$lib/components/Container';
	import { ChevronRight, MoveRight } from 'lucide-svelte';
	import Property from './components/Property.svelte';
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
			<ol class="flex justify-center my-4 gap-2">
				<li class="flex items-center gap-2">
					<a class="text-white opacity-80 hover:opacity-100 uppercase tracking-[0.2rem] leading-loose text-xs font-extrabold" href="/projecten">
						<span>projecten</span>
					</a>
					<ChevronRight class="h-5 w-auto stroke-[3px] stroke-white" />
				</li>
				<a class="text-white opacity-80 hover:opacity-100 uppercase tracking-[0.2rem] leading-loose text-xs font-extrabold" href={window.location.href}>
					<li>alles mag open</li>
				</a>
			</ol>
			<h1 class="text-white font-poppins text-3xl lg:text-6xl font-semibold mb-8">Alles mag open</h1>
			<p class="lg:w-1/2 md:w-3/4  text-white font-medium text-base leading-loose text-pretty mx-auto">
				Eefje en Jack hadden behoefte een extra (tuin)kamer die buiten naar binnen trekt. 
				De keuken was ook nodig aan vervanging toe. Hiervoor is een gave maatwerkkeuken ontworpen.
			</p>
		</Container>
	</div>
	<img alt="Bespoke 13" src="/tmp/project-example-7.jpg" class="h-full w-full object-cover" />
</div>
<Container>
	<ul class="shadow-xl grid grid-cols-1 lg:grid-cols-4 rounded-lg bg-white">
		<Property content="2022" description="jaar"/>
		<Property content="Buren" description="locatie"/>
		<Property content="Piet & Jan" description="opdrachtgever"/>
		<Property content="Renovatie en Uitbouw" description="particulier"/>
	</ul>
</Container>