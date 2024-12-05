import aspectRatio from '@tailwindcss/aspect-ratio';
import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'], // Ensure this matches your Svelte files
	theme: {
		extend: {
			colors: {
				primary: '#DDC8C4', // Add the custom primary color here
				'primary-light': '#E7D8D3',
			},
		},
	},
	plugins: [typography, forms, containerQueries, aspectRatio],
};