/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				montserrat: 'Montserrat, sans-serif',
				raleway: 'Raleway, sans-serif',
			},
			boxShadow: {
				button: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
			},
			dropShadow: {
				button: '0px 4px 4px rgba(0, 0, 0, 0.25)',
			},
		},
		colors: {
			transparent: 'transparent',
			lightestGray: '#E7E7EB',
			lightGray: '#A09FB1',
			gray: '#88869D',
			buttonLightGray: '#6E707A',
			dimmedGray: '#616475',
			backgroundLight: '#1E213A',
			backgroundDark: '#100E1D',
			darkBlue: '#110E3C',
			accentBlue: '#3C47E9',
			accentYellow: '#FFEC65',
			buttonText: '#585676',
		},
	},
	plugins: [],
}
