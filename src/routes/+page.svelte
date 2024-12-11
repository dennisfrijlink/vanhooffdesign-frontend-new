<script>
	import { Button } from '$lib/components/Button';
	import { Container } from '$lib/components/Container';
	import { Paragraph } from '$lib/components/Paragraph';
	import { ProjectCard } from '$lib/components/Project';
	import { Title } from '$lib/components/Title';
	import { MoveRight } from 'lucide-svelte';
</script>

<div class="relative h-3/4 lg:h-full w-full">
	<div
		class="absolute left-0 top-0 flex h-full w-full flex-col justify-center bg-black/50 lg:items-center"
	>
		<img alt="Van Hooff Design Icoon" src="/icon.svg" class="mx-auto h-auto w-16" />
		<h1
			class="text-center font-poppins text-3xl font-semibold leading-snug text-white lg:text-7xl lg:leading-snug"
		>
			Verbouwingen en<br />
			Maatwerk Interieurs
		</h1>
		<Container class="!my-0">
			<div class="mt-10 flex flex-col justify-center gap-6 lg:flex-row">
				<Button>
					Maak een afspraak
					<MoveRight color="#ffffff" />
				</Button>
				<Button class="bg-theme-gray">Bekijk wie wij zijn</Button>
			</div>
		</Container>
	</div>
	<img alt="Bespoke 13" src="/hero.jpg" class="h-full w-full object-cover" />
</div>
<Container class="grid-cols-2 lg:grid flex flex-col gap-12 lg:gap-32">
	<div class="lg:flex lg:flex-col lg:justify-center">
		<Title subtitle="over ons">Ik neem jou mee tijdens het gehele proces</Title>
		<Paragraph>
			Van Hooff Design is een ontwerpbureau gespecialiseerd in uitbouw, maatwerk interieur,
			transformatie en renovatie. Samen met jou bedenk, ontwerp en realiseer ik jouw droomhuis. Ik
			help je graag met een ontwerp op maat, zodat jij weer kunt genieten van jouw fijne thuis.
			Samen toveren wij jouw woning om tot een echt droomparadijs, waar je jarenlang van kunt
			genieten!
		</Paragraph>
		<div class="mt-7">
			<Button>
				Lees meer over wie wij zijn
				<MoveRight color="#ffffff" />
			</Button>
		</div>
	</div>
	<img alt="Bespoke 13" src="/hero.jpg" class="lg:h-[32rem] h-[23rem] w-full object-cover rounded-xl" />
</Container>
<Container>
	<Title subtitle="Onze projecten" centered>
		De meest recente projecten<br/>
		die zijn opgeleverd
	</Title>
	<div class="grid grid-cols-12">
		<ProjectCard title="Ruimte in de binnenstad" image="/tmp/project-example.jpg"></ProjectCard>
	</div>
</Container>
