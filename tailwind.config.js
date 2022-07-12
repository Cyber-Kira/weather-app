/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				montserrat: 'Montserrat, sans-serif',
				raleway: 'Raleway, sans-serif',
			},
			colors: {
				lightestGray: '#E7E7EB',
				lightGray: '#A09FB1',
				gray: '#88869D',
				buttonLightGray: 'rgba(110, 112, 122, 0.3)',
				dimmedGray: '#616475',
				backgroundLight: '#1E213A',
				backgroundDark: '#100E1D',
				darkBlue: '#110E3C',
				accentBlue: '#3C47E9',
			},
		},
	},
	plugins: [],
}
