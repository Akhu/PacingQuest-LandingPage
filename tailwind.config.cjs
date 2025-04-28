/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
	darkMode: 'class',
	mode: 'jit',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Nunito', ...defaultTheme.fontFamily.sans],
				nabla: ['Nabla', ...defaultTheme.fontFamily.sans],
				title: ['Nunito', ...defaultTheme.fontFamily.sans],
				//title: ['Rubik Vinyl', ...defaultTheme.fontFamily.sans],
				mono: ['IBM Plex Mono', 'monospace', ...defaultTheme.fontFamily.mono],
				prosetitle: ['Prata', ...defaultTheme.fontFamily.serif],
			},
			typography: {

			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
	],
}
