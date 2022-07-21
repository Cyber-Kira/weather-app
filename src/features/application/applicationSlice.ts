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
	unit: string
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
	unit: 'kelvin',
	isMenuOpen: false,
	locations: { data: [] },
}

export const fetchLocation = createAsyncThunk(
	'application/fetchLocations',
	async (locationString: string) => {
		const data = await fetchLocations(locationString)
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

export const { setLocation, setDate, setMenu } = applicationSlice.actions
