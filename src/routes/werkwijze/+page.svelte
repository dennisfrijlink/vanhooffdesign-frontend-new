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
	<!-- <Container class="mr-0 ml-0 lg:mr-auto pr-0 lg:pr-auto pl-0 flex flex-col-reverse lg:grid lg:grid-cols-2 gap-5 lg:gap-0">
    <div class="grid grid-cols-[5%_auto_5%] lg:grid-cols-[20%_auto] gap-5 lg:gap-10 min-h-56">
        <img class="w-full h-full object-cover rounded-r-lg lg:rounded-r-xl opacity-20" alt="" src="/tmp/project-example.jpg"/>
        <img class="w-full h-full object-cover rounded-lg lg:rounded-xl" alt="" src="/tmp/project-example.jpg"/>
        <img class="w-full h-full object-cover rounded-l-lg lg:rounded-l-xl opacity-20 lg:hidden" alt="" src="/tmp/project-example.jpg"/>
    </div>
    <div class="lg:p-20 p-5 relative">
        <h2 class="lg:text-4xl lg:leading-loose text-3xl leading-loose font-bold text-theme-blue">
            Schetsontwerp
        </h2>
        <p class="leading-loose lg:leading-loose lg:text-lg font-medium relative z-10 px-1">
            In deze fase gaan we kijken wat de mogelijkheden zijn als het gaat om de opstelling en vormgeving. 
            Mooie zichtlijnen en een praktische indeling zorgen voor nog meer woongenot. 
            Vanuit 3D schetsen en plattegronden kreeg je een breed pallet aan keuzes. 
            Ik begeleid tijdens de besprekingen en achteraf in het maken van de beste keuzes.
        </p>
    </div>
</Container>
<Container class="mr-0 ml-0 lg:mr-auto pr-0 even:bg-red-500 lg:pr-auto pl-0 flex flex-col-reverse lg:grid lg:grid-cols-2 gap-5 lg:gap-0">
    <div class="grid grid-cols-[5%_auto_5%] lg:grid-cols-[20%_auto] gap-5 lg:gap-10 min-h-56">
        <img class="w-full h-full object-cover rounded-r-lg lg:rounded-r-xl opacity-20" alt="" src="/tmp/project-example.jpg"/>
        <img class="w-full h-full object-cover rounded-lg lg:rounded-xl" alt="" src="/tmp/project-example.jpg"/>
        <img class="w-full h-full object-cover rounded-l-lg lg:rounded-l-xl opacity-20 lg:hidden" alt="" src="/tmp/project-example.jpg"/>
    </div>
    <div class="lg:p-20 p-5 relative">
        <h2 class="lg:text-4xl lg:leading-loose text-3xl leading-loose font-bold text-theme-blue">
            Schetsontwerp
        </h2>
        <p class="leading-loose lg:leading-loose lg:text-lg font-medium relative z-10 px-1">
            In deze fase gaan we kijken wat de mogelijkheden zijn als het gaat om de opstelling en vormgeving. 
            Mooie zichtlijnen en een praktische indeling zorgen voor nog meer woongenot. 
            Vanuit 3D schetsen en plattegronden kreeg je een breed pallet aan keuzes. 
            Ik begeleid tijdens de besprekingen en achteraf in het maken van de beste keuzes.
        </p>
    </div>
</Container> -->
</div>
<!-- <Container class="mr-0 pr-0 grid grid-cols-2">
    <div class="p-20 relative">
        <h2 class="text-4xl leading-loose font-bold text-theme-blue">
            Schetsontwerp
        </h2>
        <p class="leading-loose text-lg font-medium relative z-10 px-1">
            In deze fase gaan we kijken wat de mogelijkheden zijn als het gaat om de opstelling en vormgeving. 
            Mooie zichtlijnen en een praktische indeling zorgen voor nog meer woongenot. 
            Vanuit 3D schetsen en plattegronden kreeg je een breed pallet aan keuzes. 
            Ik begeleid tijdens de besprekingen en achteraf in het maken van de beste keuzes.
        </p>
    </div>
    <div class="grid grid-cols-[auto_20%] gap-10">
        <img class="w-full h-full object-cover rounded-xl" alt="" src="/tmp/project-example.jpg"/>
        <img class="w-full h-full object-cover rounded-l-xl opacity-20" alt="" src="/tmp/project-example.jpg"/>
    </div>
   
</Container>
<Container class="ml-0 pl-0 grid grid-cols-2">
    <div class="grid grid-cols-[20%_auto] gap-10">
        <img class="w-full h-full object-cover rounded-r-xl opacity-20" alt="" src="/tmp/project-example.jpg"/>
        <img class="w-full h-full object-cover rounded-xl" alt="" src="/tmp/project-example.jpg"/>
    </div>
    <div class="p-20 relative">
        <h2 class="text-4xl leading-loose font-bold text-theme-blue">
            Schetsontwerp
        </h2>
        <p class="leading-loose text-lg font-medium relative z-10 px-1">
            In deze fase gaan we kijken wat de mogelijkheden zijn als het gaat om de opstelling en vormgeving. 
            Mooie zichtlijnen en een praktische indeling zorgen voor nog meer woongenot. 
            Vanuit 3D schetsen en plattegronden kreeg je een breed pallet aan keuzes. 
            Ik begeleid tijdens de besprekingen en achteraf in het maken van de beste keuzes.
        </p>
    </div>
</Container>
<Container class="mr-0 pr-0 grid grid-cols-2">
    <div class="p-20 relative">
        <h2 class="text-4xl leading-loose font-bold text-theme-blue">
            Schetsontwerp
        </h2>
        <p class="leading-loose text-lg font-medium relative z-10 px-1">
            In deze fase gaan we kijken wat de mogelijkheden zijn als het gaat om de opstelling en vormgeving. 
            Mooie zichtlijnen en een praktische indeling zorgen voor nog meer woongenot. 
            Vanuit 3D schetsen en plattegronden kreeg je een breed pallet aan keuzes. 
            Ik begeleid tijdens de besprekingen en achteraf in het maken van de beste keuzes.
        </p>
    </div>
    <div class="grid grid-cols-[auto_20%] gap-10">
        <img class="w-full h-full object-cover rounded-xl" alt="" src="/tmp/project-example.jpg"/>
        <img class="w-full h-full object-cover rounded-l-xl opacity-20" alt="" src="/tmp/project-example.jpg"/>
    </div>
   
</Container> -->
