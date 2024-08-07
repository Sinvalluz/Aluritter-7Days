import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				title: '#0EA5E9',
				placeholder: '#94A3B8',
				border: '#94A3B8',
				btnColor: '#F1F5F9',
				btnBackground: '#10B981',
				link: '#0EA5E9',
			},
		},
	},
	plugins: [],
};
export default config;
