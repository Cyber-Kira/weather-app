import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getLocation } from '../../lib/utils/index'
import {
	fetchCurrentLocationWeather,
	FullWeatherReport,
} from '../../lib/api/weatherAPI'

interface InitialStateInterface {
	data: FullWeatherReport
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
				temp: {
					min: 18,
					max: 18,
				},
			},
		],
	},
}

interface Props {
	locationLatitude?: number
	locationLongitude?: number
}

export const getWeather = createAsyncThunk(
	'weather/getFullWeatherReport',
	async ({ locationLatitude, locationLongitude }: Props) => {
		let latitude = locationLatitude
		let longitude = locationLongitude

		if (!locationLatitude && !locationLongitude) {
			const crd = await getLocation().then(value => {
				return value
			})
			latitude = crd.coords.latitude
			longitude = crd.coords.longitude
		}

		const response = await fetchCurrentLocationWeather({
			latitude,
			longitude,
		})
		return response
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
				state.data = payload
				state.isLoading = false
			})
			.addCase(getWeather.rejected, state => {
				state.isLoading = false
			})
	},
})
