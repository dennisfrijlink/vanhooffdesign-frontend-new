<script>
	import { Container } from '$lib/components/Container';
	import { ProjectCard } from '$lib/components/Project';
	import { Title } from '$lib/components/Title';
</script>

<Container class="!mt-20">
	<Title subtitle="Onze projecten">De resultaten waar we trots op zijn</Title>
	<div class="flex flex-col lg:grid grid-cols-2 gap-6">
		<ProjectCard
			title="Ruimte in de binnenstad"
			image="/tmp/project-example.jpg"
			tags={['Keuken', 'Interieur']}
			year="2019"
		/>
		<ProjectCard
			title="Het complete plaatje"
			image="/tmp/project-example-2.jpg"
			tags={['Keuken', 'Tuin']}
			year="2020"
		/>
		<ProjectCard
			title="In contact met elkaar"
			image="/tmp/project-example-3.jpg"
			tags={['Keuken', 'Interieur']}
			year="2021"
		/>
		<ProjectCard
			title="Een 4 seizoenen tuin"
			image="/tmp/project-example-4.jpg"
			tags={['Keuken', 'Interieur']}
			year="2022"
		/>
		<ProjectCard
			title="Meegroeien met je woning"
			image="/tmp/project-example-5.jpg"
			tags={['Keuken', 'Interieur']}
			year="2023"
		/>
		<ProjectCard
			title="Van Koude Garage naar Warme Leefruimte"
			image="/tmp/project-example-6.jpg"
			tags={['Keuken', 'Interieur']}
			year="2024"
		/>
	</div>
</Container>
