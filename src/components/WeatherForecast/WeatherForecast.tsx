import React from 'react'
import { WeatherCard } from '../WeatherCard'

export const WeatherForecast = () => {
	return (
		<div className='grid grid-cols-2 md:flex flex-wrap mx-auto mb-[2.5rem] mt-[4.125rem] gap-[1.625rem]'>
			<WeatherCard />
			<WeatherCard />
			<WeatherCard />
			<WeatherCard />
			<WeatherCard />
		</div>
	)
}
