import React from 'react'
import icon from './assets/Shower.png'
import bg from './assets/Cloud-background.png'

export const CurrentWeatherIcon = () => {
	return (
		<div className='relative overflow-x-clip mb-5'>
			<img className='block scale-150 mt-16 opacity-5' src={bg} alt='Clouds' />
			<img
				className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-75 md:scale-90'
				src={icon}
				alt='Shower'
			/>
		</div>
	)
}
