import { AxiosError, AxiosResponse } from 'axios'

const axios = require('axios').default

const url = 'https://api.openweathermap.org/data/2.5'

export type WeatherType =
	| 'Clear'
	| 'Hail'
	| 'Haze'
	| 'Rain'
	| 'Clouds'
	| 'Drizzle'
	| 'Shower'
	| 'Sleet'
	| 'Snow'
	| 'Thunderstorm'

export interface WeatherDay {
	dt: number
	weather: [
		{
			main: WeatherType
		}
	]
	temp: {
		min: number
		max: number
	}
}

export interface FullWeatherReport {
	timezone: string
	current: {
		temp: number
		humidity: number
		visibility: number
		pressure: number
		wind_speed: number
		wind_deg: number
		weather: [
			{
				main: WeatherType
			}
		]
	}
	daily: WeatherDay[]
}

interface Props {
	latitude?: number
	longitude?: number
}

export const fetchCurrentLocationWeather = ({
	latitude,
	longitude,
}: Props): FullWeatherReport => {
	return axios(
		`${url}/onecall?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_SECRET_KEY}`
	)
		.then((response: AxiosResponse<FullWeatherReport>) => {
			return response.data
		})
		.catch((error: AxiosError) => error)
}
