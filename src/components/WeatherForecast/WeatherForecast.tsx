import React from 'react'
import { useAppSelector } from '../../app/hooks'
import { WeatherForecastSkeleton } from '../../lib/skeletons/WeatherForecastSkeleton'
import { WeatherCard } from '../WeatherCard'

export const WeatherForecast = () => {
	const { data, isLoading } = useAppSelector(store => store.weather)

	const WeatherForecastElemet = data.daily.slice(1).map(day => {
		return (
			<WeatherCard
				key={day.dt}
				img={day.weather[0].main}
				min={day.temp.min}
				max={day.temp.max}
				timestamp={day.dt}
			/>
		)
	})

	return (
		<div className='grid grid-cols-2 md:flex flex-nowrap max-w-full overflow-hidden mx-auto mb-[2.5rem] mt-[4.125rem] gap-[1.625rem]'>
			{!isLoading ? WeatherForecastElemet : <WeatherForecastSkeleton />}
		</div>
	)
}
