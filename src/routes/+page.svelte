<script>
	import { Button } from '$lib/components/Button';
	import { Container } from '$lib/components/Container';
	import { Paragraph } from '$lib/components/Paragraph';
	import { ProjectCard } from '$lib/components/Project';
	import { Title } from '$lib/components/Title';
	import { MoveRight } from 'lucide-svelte';
</script>

<div class="relative h-3/4 w-full lg:h-full">
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
<Container class="flex grid-cols-2 flex-col gap-12 lg:grid lg:gap-32">
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
	<img
		alt="Bespoke 13"
		src="/hero.jpg"
		class="h-[23rem] w-full rounded-xl object-cover lg:h-[32rem]"
	/>
</Container>
<Container>
	<Title subtitle="Onze projecten" centered>
		De meest recente projecten<br />
		die zijn opgeleverd
	</Title>
	<div class="md:grid md:grid-cols-12 lg:grid-cols-11 flex flex-col gap-6">
		<ProjectCard class="col-span-6 lg:col-span-5" title="Ruimte in de binnenstad" description="Een keuken in een monumentaal pand mag net wat extra's hebben. Zo kan de bijzondere marmerlook achterplaat helemaal oplichten." image="/tmp/project-example.jpg"
		></ProjectCard>
		<ProjectCard
			class="col-span-6 lg:col-span-3"
			title="Het complete plaatje"
			description="De gehele boerderij wordt verduurzaamd, krijgt een nieuwe gevel en een nieuw dak. Aan de voorzijde wordt uitgebouw om ruimte te maken voor een ruime leefkeuken."
			image="/tmp/project-example-2.jpg"
		></ProjectCard>
		<ProjectCard
			class="col-span-6 lg:col-span-3"
			title="In contact met elkaar"
			description="Deze royale vrijstaande woning in Ede herkende ook de opdrachtgever na de verbouwing niet meer terug."
			image="/tmp/project-example-3.jpg"
		></ProjectCard>
		<ProjectCard
			class="col-span-6 lg:col-span-3"
			title="Een 4 seizoenen tuin"
			description="Corrie en Fred hadden behoefte aan meer ruimte voor het gezin. Een extra eet- en borrelruimte samen met een afsluitbare overkapping vormde hiervoor de perfecte oplossing."
			image="/tmp/project-example-4.jpg"
		></ProjectCard>
		<ProjectCard
			class="col-span-6 lg:col-span-3"
			title="Meegroeien met je woning"
			description="Sarah en Jeffrey hadden met de groei van de kleine Noa behoefte aan meer ruimte. Met een tuin die niet in de zon staat was veel daglicht erg belangrijk."
			image="/tmp/project-example-5.jpg"
		></ProjectCard>
		<ProjectCard
			class="col-span-6 lg:col-span-5"
			title="Van Koude Garage naar Warme Leefruimte"
			description="Reinier had als zelfstandig ondernemer een nieuwe werkplek nodig. Als gezin van 5 was er behoefte aan meer gestructureerde berging en een gave veranda."
			image="/tmp/project-example-6.jpg"
		></ProjectCard>
	</div>
</Container>
