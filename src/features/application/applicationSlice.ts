import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchLocations } from '../../lib/api/geoAPI'

interface LocationInterface {
	id: number
	name: string
	latitude: number
	longitude: number
}

interface LocationsInterface {
	data: LocationInterface[]
}
interface InitialStateInterface {
	isLoading: boolean
	crd: {
		latitude: number
		longitude: number
	}
	day: string
	unit: 'celcius' | 'fahrenheit'
	isMenuOpen: boolean
	locations: LocationsInterface
}

const initialState: InitialStateInterface = {
	isLoading: false,
	crd: {
		latitude: 40,
		longitude: 36,
	},
	day: 'Fri, 5 Jun',
	unit: 'celcius',
	isMenuOpen: false,
	locations: { data: [] },
}

export const fetchLocation = createAsyncThunk(
	'application/fetchLocations',
	async (locationString: string) => {
		// I use timeout before returning value because FREE plan on geoDB forbids certain amount of requests/second
		const artifitialTimeout = () => {
			return new Promise(resolve => {
				setTimeout(() => {
					resolve('done!')
				}, 700)
			})
		}

		const data = await fetchLocations(locationString)
		await artifitialTimeout()

		return data
	}
)

export const applicationSlice = createSlice({
	name: 'application',
	initialState,
	reducers: {
		setLocation(state, { payload }) {
			state.crd = payload
		},
		setDate(state) {
			state.day = new Date().toUTCString().split(' ').splice(0, 3).join(' ')
		},
		setMenu(state, { payload }) {
			state.isMenuOpen = payload
			state.locations = { data: [] }
		},
		setUnit(state, { payload }: { payload: 'celcius' | 'fahrenheit' }) {
			state.unit = payload
		},
	},
	extraReducers: builder =>
		builder
			.addCase(fetchLocation.pending, state => {
				state.isLoading = true
			})
			.addCase(fetchLocation.fulfilled, (state, { payload }) => {
				state.locations = payload
				state.isLoading = false
			})
			.addCase(fetchLocation.rejected, state => {
				state.isLoading = false
			}),
})

export const { setLocation, setDate, setMenu, setUnit } =
	applicationSlice.actions
