<script lang="ts">
	import { superForm, setMessage, setError } from 'sveltekit-superforms';
	import { _contactSchema } from './+page.js';
	import { Container } from '$lib/components/Container';
	import { zod } from 'sveltekit-superforms/adapters';
	import { Input } from '$lib/components/Form';
	import { Button } from '$lib/components/Button';

	let { data } = $props();

	const { form, errors, message, constraints, enhance } = superForm(data.form, {
		SPA: true,
		validators: zod(_contactSchema),
		onUpdate({ form }) {
			if (form.data.email.includes('spam')) {
				setError(form, 'email', 'Suspicious email address.');
			} else if (form.valid) {
				setMessage(form, 'Valid data!');
			}
		}
	});
</script>

<Container class="relative !mb-40 !mt-10 lg:grid lg:grid-cols-2">
	<div class="lg:pr-20 flex flex-col">
		<h1
			class="font-poppins text-theme-blue text-7xl font-semibold tracking-tighter leading-relaxed"
		>
			Contact
		</h1>
		<p
			class="text-black font-medium text-base leading-loose max-sm:text-sm max-sm:leading-loose mb-12"
		>
			Wil jij een persoonlijk ontwerp voor een nieuwe verbouwing of maatwerkinterieur? En ben je
			benieuwd wat er in jouw situatie mogelijk is? Neem dan gerust contact op via onderstaand
			contactformulier en ik kom graag langs om vrijblijvend de mogelijkheden te bespreken.
		</p>
		<img
			class="lg:h-full lg:w-full h-20 w-auto object-cover rounded-2xl max-lg:hidden"
			alt="Bespoke 13"
			src="/tmp/project-example.jpg"
		/>
	</div>
	<div class="border-2 border-solid rounded-md border-transparent shadow-input p-10">
		<h2 class="font-semibold block tracking-tight text-2xl">Bericht</h2>
		<p
			class="mb-8 text-black font-medium text-base leading-loose max-sm:text-sm max-sm:leading-loose"
		>
			Waar kunnen we je mee helpen?
		</p>
		<form class="md:grid md:grid-cols-2 flex flex-col gap-7" method="POST" use:enhance>
			<Input
				name="firstname"
				label="Voornaam"
				bind:value={$form.firstname}
				errors={$errors.firstname}
				constraints={$constraints.firstname}
			/>
			<Input
				name="lastname"
				label="Achternaam"
				bind:value={$form.lastname}
				errors={$errors.lastname}
				constraints={$constraints.lastname}
			/>
			<Input
				name="email"
				label="Email"
				bind:value={$form.email}
				errors={$errors.email}
				constraints={$constraints.email}
			/>
			<Input
				name="phone"
				label="Telefoonnummer"
				bind:value={$form.phone}
				errors={$errors.phone}
				constraints={$constraints.phone}
			/>
			<Input
				name="adress"
				label="Volledig adres"
				bind:value={$form.adress}
				errors={$errors.adress}
				constraints={$constraints.adress}
			/>
			<Input
				name="subject"
				label="Betreft"
				bind:value={$form.subject}
				errors={$errors.subject}
				constraints={$constraints.subject}
			/>
			<Input
				name="message"
				label="Bericht"
				bind:value={$form.message}
				errors={$errors.message}
				constraints={$constraints.message}
				textBox
				class="col-span-2"
			/>
			<Button class="col-span-2">Bevestig</Button>
		</form>
	</div>
</Container>
