export const fahrenheitToCelsius = (fahrenheit: number) =>
	(fahrenheit - 273.15).toFixed(0)

export const getLocation = () => {
	return new Promise<GeolocationPosition>(res => {
		navigator.geolocation.getCurrentPosition(res)
	})
}

export const degToCompass = (num: number) => {
	const val = Math.floor(num / 22.5 + 0.5)
	const arr = [
		'N',
		'NNE',
		'NE',
		'ENE',
		'E',
		'ESE',
		'SE',
		'SSE',
		'S',
		'SSW',
		'SW',
		'WSW',
		'W',
		'WNW',
		'NW',
		'NNW',
	]
	return arr[val % 16]
}
