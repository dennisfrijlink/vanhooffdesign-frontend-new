import { error } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { z } from 'zod';

export const _contactSchema = z.object({
	firstname: z.string(),
	lastname: z.string(),
	email: z.string().email(),
	phone: z.string(),
	adress: z.string(),
	subject: z.string(),
	message: z.string()
});

export const load = async () => {
	const form = await superValidate(zod(_contactSchema));
	return { form };
};
