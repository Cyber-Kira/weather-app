import React from 'react'
import img from './assets/HeavyRain.png'

export const WeatherIcon = () => {
	return (
		<img
			className='max-w-[55px] h-auto mt-[0.625rem] mb-[1.9375rem]'
			src={img}
			alt='Weather'
		/>
	)
}
