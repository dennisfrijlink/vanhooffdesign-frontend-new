import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import defaultTheme from 'tailwindcss/defaultTheme';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			screens: {
				'3xl': '1600px'
			},
			animation: {
				fade: 'fadeIn .25s ease-in-out',
			},
			keyframes: {
				fadeIn: {
					from: { opacity: "0" },
					to: { opacity: "1" },
				},
			},
			colors: {
				"theme-blue": "#4e6e80",
				"theme-blue-light": "#718B99",
				"theme-blue-extra-light": "#E4ECED",
				"theme-gray": "#717070",
				"theme-brown-light": "#D2CFCC"
			},
			fontFamily: {
				poppins: ["poppins", ...defaultTheme.fontFamily.sans],
				jakarta: ["Plus Jakarta Sans", ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: [typography, forms, containerQueries]
} satisfies Config;
