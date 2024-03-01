/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': 'hsl(341.95deg 100% 26.27% / 90%)',
				'text': 'hsl(0deg 0.93% 1.35%)'
			}
		},
	},
	plugins: [],
}
