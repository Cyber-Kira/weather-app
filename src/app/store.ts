import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { applicationSlice } from '../features/application/applicationSlice'
import { weatherSlice } from '../features/data/weatherSlice'

export const store = configureStore({
	reducer: {
		weather: weatherSlice.reducer,
		application: applicationSlice.reducer,
	},
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>
