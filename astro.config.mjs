import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Summerside Choir',
			favicon: '/scclogo.png',
			social: [
				{ icon: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/pages/Summerside-Community-Choir/125415017614194' },
				{ icon: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/user/SummersideChoirPEI/' },
			],
			customCss: [
				'./src/styles/custom.css',
			],
		}),
	],
}); 
