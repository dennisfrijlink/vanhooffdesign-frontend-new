<script>
	import { Container } from '$lib/components/Container';
	import { Paragraph } from '$lib/components/Paragraph';
	import { Title } from '$lib/components/Title';
</script>

<svelte:head>
	<style>
		html {
			@apply bg-theme-brown-light;
		}
	</style>
</svelte:head>

<Container class="relative !mb-40 !mt-20">
	<img
		class="absolute right-0 top-0 z-10 h-auto w-96 translate-x-1/2 opacity-20"
		src="/icon.svg"
		alt=""
	/>
	<Title
		subtitle="Over ons"
		centered
		class="mx-auto lg:w-1/2 text-pretty lg:text-4xl lg:leading-normal"
		>Ik neem jou mee tijdens het gehele proces.</Title
	>
	<Paragraph class="mx-auto lg:w-1/2 text-center max-sm:text-sm max-sm:leading-loose">
		Van jongs af aan is ontwerpen mijn passie. Of het nu ging om tekenen of een object creëren,
		beide vond ik geweldig! Creatief bezig zijn, daar ging het mij om. Later ontwikkelde ik een
		passie voor architectuur. Verschillende vormen, structuren en zichtlijnen kunnen een ruimte
		maken of breken. Was er een architect aan de slag gegaan voor een woning? Dan merkte ik direct
		dat deze woning veel fijner was in gebruik dan andere woningen. Ik herkende ontworpen woningen
		direct. Al merkte ik ook dat er wel erg trendgevoelig werd ontworpen. Zo miste ik eigenzinnige
		en tijdloze details.
	</Paragraph>
</Container>
<Container class="flex grid-cols-2 flex-col gap-12 lg:grid lg:gap-32">
	<div>
		<Title subtitle="Persoonlijk ontwerp"
			>Samengesteld met veel passie en met aandacht voor de kleinste details</Title
		>
		<Paragraph class="text-sm">
			Iedere woning is anders. Dat is niet zo vreemd, iedereen heeft een eigen smaak. Bij het
			ontwerpen van een verbouwing, maatwerkkeuken, maatwerkbadkamer of renovatie is dit niet
			anders. Een ontwerp kan door de één als prachtig en praktisch worden beschouwd, terwijl de
			ander niets met het ontwerp heeft. Ik ben er dan ook van overtuigd dat een perfect ontwerp tot
			stand komt door een nauwe samenwerking tussen de opdrachtgever en de ontwerper.
			<br /><br />
			Een ontwerp voor een uitbouw, maatwerk interieur of renovatie wordt altijd gebaseerd op de 'must-haves'
			en 'wanna-haves' van de klant. Ik kijk naar wat er allemaal mogelijk is binnen het ontwerp en na
			iedere ontwerpfase plannen we een sessie om met elkaar te sparren. Zo komen we tot een optimaal
			resultaat: een persoonlijk ontwerp, samengesteld met veel passie en met aandacht voor de kleinste
			details.
		</Paragraph>
	</div>
	<img
		alt="Bespoke 13"
		src="/tmp/project-example-5.jpg"
		class="h-[23rem] w-full rounded-xl object-cover lg:h-[32rem]"
	/>
</Container>
<Container class="flex grid-cols-2 flex-col-reverse gap-12 lg:grid lg:gap-32">
	<img
		alt="Bespoke 13"
		src="/tmp/project-example-4.jpg"
		class="h-[23rem] w-full rounded-xl object-cover lg:h-[32rem]"
	/>
	<div>
		<Title subtitle="Service">Ontwerpbureau van Hooff Design garandeert 100% service</Title>
		<Paragraph class="text-sm">
			Ik sta altijd klaar voor mijn klanten. Niet alleen neem ik ze mee tijdens iedere stap in het
			ontwerpproces, ook ben ik op ieder moment bereikbaar. 's Ochtends, 's avonds en in het
			weekend. Werk jij overdag, dan vinden de besprekingen in de avond plaats. Twijfel je over
			bepaalde ontwerpkeuzes? Dan mag je mij altijd bellen om dit kenbaar te maken en om over het
			maatwerk ontwerp te sparren. Service staat bij mij op nummer één. Mijn klant is koning, ook
			als het gaat om ontwerpkeuzes. Ik zie jou niet als een eigenwijze ontwerper, maar als iemand
			die bijdraagt aan zijn of haar eigen, tijdloze ontwerp.
		</Paragraph>
	</div>
</Container>
<Container class="flex grid-cols-2 flex-col gap-12 lg:grid lg:gap-32">
	<div>
		<Title subtitle="Service" class="!text-[#1D513C]">Duurzaam</Title>
		<Paragraph class="text-sm">
			Ik denk na over de levensloop van een gebouw. Waar zich nu een bijkeuken en eetkamer bevinden,
			daar kan over 20 jaar zomaar een slaapkamer met badkamer zijn. Duurzaamheid is dus niet enkel
			terug te vinden in energiegebruik en installaties, maar ook juist in vormgeving.
			<br /><br />
			Binnen mijn ontwerpen draait het dan ook om duurzame, tijdloze en soms eigenzinnige vormgeving.
			Eigenzinnig omdat iedereen een eigen wens en visie heeft. Ik vind het dan ook fantastisch om samen
			met de opdrachtgever tot een ontwerp te komen die bij alle wensen en de visie aansluit.
			<br /><br />
			Het liefst werk ik met hout in een ontwerp, bijvoorbeeld als gevelmateriaal en voor constructies.
			Hout neemt CO2 op en is bio-based, waardoor het terug de natuur in kan zodra een gebouw gesloopt
			wordt. Een maatwerk interieur wordt indien gewenst samengesteld met materialen die een lange levensduur
			hebben. Wil jij duurzame materialen terug laten komen in een uitbouw, maatwerk interieur, maatwerkkeuken
			of renovatie? Ik vertel je graag meer over de mogelijkheden.
		</Paragraph>
	</div>
	<img
		alt="Bespoke 13"
		src="/tmp/project-example-6.jpg"
		class="h-[23rem] w-full rounded-xl object-cover ring-2 ring-[#1D513C] ring-offset-2 ring-offset-theme-brown-light lg:h-[32rem]"
	/>
</Container>
