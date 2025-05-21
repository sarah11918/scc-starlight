import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.summersidechoir.ca',
	experimental: {
		responsiveImages: true,
	  },
	  image: {
		experimentalLayout: 'constrained',
	  },
	integrations: [
		starlight({
			title: 'Summerside Choir',
			favicon: '/scclogo.png',
			logo: {
				src: './src/assets/SSCC_LOGO.jpg',
			},
			social: [
				{ icon: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/SummersideChoir/' },
				{ icon: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/user/SummersideChoirPEI/' },
			],
			customCss: [
				'./src/styles/custom.css',
			],
			head: [
				{tag: "script",
					attrs: {
					 "data-goatcounter": "https://summersidechoir.goatcounter.com/count",
					 async: true,
					 src: "//gc.zgo.at/count.js",
					}
				},
				{tag: "meta", 
					attrs: {
					  property: "og:image", 
					  content: "/scc.jpg",
					}
				},
			],
		}),
	],
}); 
