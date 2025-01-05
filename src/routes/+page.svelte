<script>
	import { Button } from '$lib/components/Button';
	import { Container } from '$lib/components/Container';
	import { Paragraph } from '$lib/components/Paragraph';
	import { ProjectCard } from '$lib/components/Project';
	import { ServiceCard } from '$lib/components/Service/';
	import { Title } from '$lib/components/Title';
	import { MoveRight } from 'lucide-svelte';
</script>

<div class="relative h-[45rem] w-full lg:h-[100svh]">
	<div
		class="absolute left-0 top-0 flex h-full w-full flex-col justify-center bg-black/50 lg:items-center"
	>
		<img alt="Van Hooff Design Icoon" src="/icon-white.svg" class="mx-auto h-auto w-16" />
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
	<img alt="Bespoke 13" src="/hero-compressed.jpg" class="h-full w-full object-cover" />
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
		src="/hero-compressed.jpg"
		class="h-[23rem] w-full rounded-xl object-cover lg:h-[32rem]"
	/>
</Container>
<Container>
	<Title subtitle="Onze projecten" centered>
		De meest recente projecten<br />
		die zijn opgeleverd
	</Title>
	<div class="mb-10 flex flex-col gap-6 md:grid md:grid-cols-12 lg:grid-cols-11">
		<ProjectCard
			class="col-span-6 lg:col-span-5"
			title="Ruimte in de binnenstad"
			image="/tmp/project-example.jpg"
			tags={['Keuken', 'Interieur']}
			year="2019"
		/>
		<ProjectCard
			class="col-span-6 lg:col-span-3"
			title="Het complete plaatje"
			image="/tmp/project-example-2.jpg"
			tags={['Keuken', 'Tuin']}
			year="2020"
		/>
		<ProjectCard
			class="col-span-6 lg:col-span-3"
			title="In contact met elkaar"
			image="/tmp/project-example-3.jpg"
			tags={['Keuken', 'Interieur']}
			year="2021"
		/>
		<ProjectCard
			class="col-span-6 lg:col-span-3"
			title="Een 4 seizoenen tuin"
			image="/tmp/project-example-4.jpg"
			tags={['Keuken', 'Interieur']}
			year="2022"
		/>
		<ProjectCard
			class="col-span-6 lg:col-span-3"
			title="Meegroeien met je woning"
			image="/tmp/project-example-5.jpg"
			tags={['Keuken', 'Interieur']}
			year="2023"
		/>
		<ProjectCard
			class="col-span-6 lg:col-span-5"
			title="Van Koude Garage naar Warme Leefruimte"
			image="/tmp/project-example-6.jpg"
			tags={['Keuken', 'Interieur']}
			year="2024"
		/>
	</div>
	<a href="/projecten">
		<Button class="mx-auto">
			Bekijk alle projecten
			<MoveRight color="#ffffff" />
		</Button>
	</a>
</Container>
<Container>
	<div class="mb-10 lg:grid lg:grid-cols-2">
		<div>
			<Title subtitle="Onze werkwijze">De 7 stappen tot het nieuwe design</Title>
			<Button class="max-lg:hidden">
				Bekijk de details van onze werkwijze
				<MoveRight color="#ffffff" />
			</Button>
		</div>
		<Paragraph>
			Van Hooff Design is een ontwerpbureau gespecialiseerd in uitbouw, maatwerk interieur,
			transformatie en renovatie. Samen met jou bedenk, ontwerp en realiseer ik jouw droomhuis.
		</Paragraph>
		<Button class="mt-9 lg:hidden">
			Bekijk de details van onze werkwijze
			<MoveRight color="#ffffff" />
		</Button>
	</div>
	<div class="flex flex-col gap-5 lg:grid lg:grid-cols-12">
		<ServiceCard title="Kennismaking" class="col-span-3 bg-[#3d7385]">
			We are a leading architecture firm dedicated to creating designs.
		</ServiceCard>
		<ServiceCard title="Schetsontwerp" class="col-span-3 bg-[#264b69]">
			We are a leading architecture firm dedicated to creating designs.
		</ServiceCard>
		<ServiceCard title="Voorontwerp" class="col-span-3 bg-[#588ea7]">
			We are a leading architecture firm dedicated to creating designs.
		</ServiceCard>
		<ServiceCard title="Definitief ontwerp" class="col-span-3 bg-[#264b69]">
			We are a leading architecture firm dedicated to creating designs.
		</ServiceCard>
		<ServiceCard title="Technische uitwerking" class="col-span-3 col-start-3 bg-[#588ea7]">
			We are a leading architecture firm dedicated to creating designs.
		</ServiceCard>
		<ServiceCard title="Vergunningsaanvraag" class="col-span-3 bg-[#3d7385]">
			We are a leading architecture firm dedicated to creating designs.
		</ServiceCard>
		<ServiceCard title="Bouwbegeleiding" class="col-span-3 bg-[#588ea7]">
			We are a leading architecture firm dedicated to creating designs.
		</ServiceCard>
	</div>
</Container>
