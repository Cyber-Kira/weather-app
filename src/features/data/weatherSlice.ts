import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
	fetchCurrentLocationWeather,
	FullWeatherReport,
} from '../../lib/api/weatherAPI'
import { fetchByCoords } from '../../lib/api/geoAPI'
import { getLocation } from '../../lib/utils'

interface InitialStateInterface {
	data: FullWeatherReport
	currentCity?: string
	isLoading: boolean
}

const initialState: InitialStateInterface = {
	isLoading: false,
	data: {
		timezone: 'Europe/Moscow',
		current: {
			temp: 15,
			humidity: 84,
			visibility: 10000,
			pressure: 998,
			wind_speed: 7,
			wind_deg: 180,
			weather: [
				{
					main: 'Shower',
				},
			],
		},
		daily: [
			{
				dt: 1658307600,
				weather: [
					{
						main: 'Shower',
					},
				],
				temp: {
					min: 18,
					max: 18,
				},
			},
		],
	},
}

interface Props {
	latitude: number
	longitude: number
}

export const getWeatherByCoords = createAsyncThunk(
	'weather/getFullWeatherReportByCoords',
	async ({ latitude, longitude }: Props) => {
		const response = await fetchCurrentLocationWeather({
			latitude,
			longitude,
		})
		const currentLocation = await fetchByCoords(latitude, longitude)
		const currentCity = currentLocation.data[0].city

		return { response, currentCity }
	}
)

export const getWeather = createAsyncThunk(
	'weather/getFullWeatherReport',
	async () => {
		const geoLocation = await getLocation().then(data => {
			return data
		})
		const geoLatitude = geoLocation.coords.latitude
		const geoLongitude = geoLocation.coords.longitude
		const response = await fetchCurrentLocationWeather({
			latitude: geoLatitude,
			longitude: geoLongitude,
		})
		const currentLocation = await fetchByCoords(geoLatitude, geoLongitude)
		const currentCity = currentLocation.data[0].city

		return { response, currentCity }
	}
)

export const weatherSlice = createSlice({
	name: 'weather',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(getWeather.pending, state => {
				state.isLoading = true
			})
			.addCase(getWeather.fulfilled, (state, { payload }) => {
				state.data = payload.response
				state.currentCity = payload.currentCity
				state.isLoading = false
			})
			.addCase(getWeather.rejected, state => {
				state.isLoading = false
			})
			.addCase(getWeatherByCoords.pending, state => {
				state.isLoading = true
			})
			.addCase(getWeatherByCoords.fulfilled, (state, { payload }) => {
				state.data = payload.response
				state.currentCity = payload.currentCity
				state.isLoading = false
			})
			.addCase(getWeatherByCoords.rejected, state => {
				state.isLoading = false
			})
	},
})
