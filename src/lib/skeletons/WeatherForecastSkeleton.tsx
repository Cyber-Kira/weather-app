import React from 'react'
import { WeatherCardSkeleton } from './WeatherCardSkeleton'

export const WeatherForecastSkeleton = () => {
	return (
		<>
			<WeatherCardSkeleton />
			<WeatherCardSkeleton />
			<WeatherCardSkeleton />
			<WeatherCardSkeleton />
			<WeatherCardSkeleton />
		</>
	)
}
