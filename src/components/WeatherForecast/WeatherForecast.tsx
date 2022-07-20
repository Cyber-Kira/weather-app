import React from 'react'
import { useAppSelector } from '../../app/hooks'
import { WeatherCard } from '../WeatherCard'

export const WeatherForecast = () => {
	const { data } = useAppSelector(store => store.weather)

	return (
		<div className='grid grid-cols-2 md:flex flex-nowrap max-w-full overflow-hidden mx-auto mb-[2.5rem] mt-[4.125rem] gap-[1.625rem]'>
			{data.daily.slice(1).map(day => {
				return (
					<WeatherCard
						key={day.dt}
						min={day.temp.min}
						max={day.temp.max}
						timestamp={day.dt}
					/>
				)
			})}
		</div>
	)
}
