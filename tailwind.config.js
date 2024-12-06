/** @type {import('tailwindcss').Config} */
module.exports = {
	prefix: 'tw-',
	important: false,
	content: [
		"./**/*.{html,js}",
		"./index.html",
		"./scripts/**/*.js"
	],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				poly: ['"poly"', "serif"],
			},
		},
	},
	plugins: [
		function({ addVariant }) {
			addVariant('firefox', ':-moz-any(&)')
		}
	],
}