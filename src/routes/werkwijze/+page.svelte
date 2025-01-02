<script lang="ts">
	import { Container } from '$lib/components/Container';
	import { Title } from '$lib/components/Title';
	import StepBlock from './components/StepBlock.svelte';
</script>

<svelte:head>
	<style>
		html {
			@apply bg-theme-blue-extra-light;
		}
	</style>
</svelte:head>
<Container class="!mb-20 !mt-20">
	<Title subtitle="Onze werkwijze" centered class="lg:text-4xl lg:leading-normal"
		>Een kijkje achter de schermen<br />bij de werkwijze van Hooff Design</Title
	>
</Container>
<img class="h-96 w-full object-cover" src="/tmp/sketch-1.jpg" alt="" />
<div>
	<StepBlock
		title="Kennismaking"
		description="
           Tijdens een vrijblijvende kennismaking vertel ik je graag meer over de mogelijkheden. 
           De markt in materialen en toffe gadgets is namelijk enorm! We bespreken de wensen en ik 
           denk graag in alle opzichten met je mee.
        "
		image="/tmp/project-example.jpg"
	/>
	<StepBlock
		title="Schetsontwerp"
		description="
        In deze fase gaan we kijken wat de mogelijkheden zijn als het gaat om de opstelling en vormgeving. 
        Mooie zichtlijnen en een praktische indeling zorgen voor nog meer woongenot. 
        Vanuit 3D schetsen en plattegronden kreeg je een breed pallet aan keuzes. 
        Ik begeleid tijdens de besprekingen en achteraf in het maken van de beste keuzes.
    "
		image="/tmp/project-example.jpg"
	/>
	<StepBlock
		title="Voorontwerp"
		description="
      In deze fase van het ontwerpproces komt het ontwerp tot leven. 
      We kunnen ontwerpkeuzes met betrekking tot lichtinval, materialisatie 
      en vorm tijdens het voorontwerp goed afwegen, om zo tot het ideale 
      ontwerp te komen. Vanuit renders (fotorealistische 3D-beelden) zie 
      je exact hoe jouw nieuwe huis eruit komt te zien. Je komt dus nooit 
      voor verrassingen te staan bij de oplevering.
    "
		image="/tmp/project-example.jpg"
	/>
	<StepBlock
		title="Definitief ontwerp"
		description="
        In het definitieve ontwerp staan alle ingrediënten om jouw droomhuis te realiseren. 
        Samen met vertrouwde meubelmakers en aannemers ga ik in overleg om alle details 
        te verzorgen. Vanuit hier ontstaat een echte maatwerkverbouwing. Je krijgt een 
        tijdloos, persoonlijk en dus altijd een uniek ontwerp.
    "
		image="/tmp/project-example.jpg"
	/>

	<StepBlock
		title="Technische uitwerking"
		description="
            In deze fase gaan we kijken wat de mogelijkheden zijn als het gaat om de opstelling en vormgeving. 
            Mooie zichtlijnen en een praktische indeling zorgen voor nog meer woongenot. 
            Vanuit 3D schetsen en plattegronden kreeg je een breed pallet aan keuzes. 
            Ik begeleid tijdens de besprekingen en achteraf in het maken van de beste keuzes."
		image="/tmp/project-example.jpg"
	/>
	<StepBlock
		title="Vergunningsaanvraag"
		description="
        In deze fase van het ontwerpproces komt het ontwerp tot leven. 
        We kunnen ontwerpkeuzes met betrekking tot lichtinval, materialisatie 
        en vorm tijdens het voorontwerp goed afwegen, om zo tot het ideale 
        ontwerp te komen. Vanuit renders (fotorealistische 3D-beelden) zie 
        je exact hoe jouw nieuwe huis eruit komt te zien. Je komt dus nooit 
        voor verrassingen te staan bij de oplevering."
		image="/tmp/project-example.jpg"
	/>
	<StepBlock
		title="Bouwbegeleiding"
		description="
            In het definitieve ontwerp staan alle ingrediënten om jouw droomhuis te realiseren. 
            Samen met vertrouwde meubelmakers en aannemers ga ik in overleg om alle details 
            te verzorgen. Vanuit hier ontstaat een echte maatwerkverbouwing. Je krijgt een 
            tijdloos, persoonlijk en dus altijd een uniek ontwerp."
		image="/tmp/project-example.jpg"
	/>
</div>
