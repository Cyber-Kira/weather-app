import React from 'react'
import { Temperature, WeatherIcon } from './components'

export const WeatherCard = () => {
	return (
		<div className='flex flex-col items-center max-w-[120px] max-h-[177px] px-[1.375rem] py-[1.125rem] bg-backgroundLight'>
			<span className='font-raleway font-medium text-base leading-[19px] text-lightestGray'>
				Tommorow
			</span>
			<WeatherIcon />
			<Temperature />
		</div>
	)
}
