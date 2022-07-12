import React from 'react'
import { CurrentCondition } from '../CurrentCondition'
import { CurrentDay } from '../CurrentDay'
import { CurrentLocation } from '../CurrentLocation'
import { CurrentTemperature } from '../CurrentTemperature'
import { CurrentWeatherIcon } from '../CurrentWeatherIcon'
import { Header } from '../Header'

export const CurrentWeather = () => {
	return (
		<div className='bg-backgroundLight'>
			<div className='md:flex'>
				<div className='basis-1/4 md:h-screen md:overflow-auto'>
					<Header />
					<CurrentWeatherIcon />
					<CurrentTemperature />
					<CurrentCondition />
					<CurrentDay />
					<CurrentLocation />
				</div>
				<div className='basis-3/4 md:h-screen overflow-auto bg-backgroundDark' />
			</div>
		</div>
	)
}
