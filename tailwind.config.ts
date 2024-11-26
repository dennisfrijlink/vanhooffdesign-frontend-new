import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import defaultTheme from 'tailwindcss/defaultTheme';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				poppins: ["poppins", ...defaultTheme.fontFamily.sans],
				jakarta: ["Plus Jakarta Sans", ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: [typography, forms, containerQueries]
} satisfies Config;
