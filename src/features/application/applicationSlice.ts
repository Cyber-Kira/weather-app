import { createSlice } from '@reduxjs/toolkit'

interface InitialStateInterface {
	crd: {
		latitude: number
		longitude: number
	}
	day: string
	unit: string
	isMenuOpen: boolean
}

const initialState: InitialStateInterface = {
	crd: {
		latitude: 40,
		longitude: 36,
	},
	day: 'Fri, 5 Jun',
	unit: 'kelvin',
	isMenuOpen: false,
}

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
	},
})

export const { setLocation, setDate } = applicationSlice.actions
