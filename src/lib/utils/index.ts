export const fahrenheitToCelsius = (fahrenheit: number) =>
	(fahrenheit - 273.15).toFixed(0)

export const getLocation = () => {
	return new Promise<GeolocationPosition>(res => {
		navigator.geolocation.getCurrentPosition(res)
	})
}
