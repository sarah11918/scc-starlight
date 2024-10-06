import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Summerside Choir',
			social: {
				facebook: 'https://www.facebook.com/pages/Summerside-Community-Choir/125415017614194',
				youtube: 'https://www.youtube.com/user/SummersideChoirPEI/',
			},
			customCss: [
				'./src/styles/custom.css',
			],
		}),
	],
});
