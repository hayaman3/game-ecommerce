import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/_components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				dark: {
					25: '#383838',
					50: '#363636',
					100: '#333333',
					200: '#2E2E2E',
					300: '#2C2C2C',
					400: '#292929',
					500: '#272727',
					600: '#252525',
					700: '#232323',
					800: '#1E1E1E',
					900: '#121212',
				},
			},
			screens: {
				xs: '450px',
			},
		},
	},
	plugins: [],
};

export default config;
