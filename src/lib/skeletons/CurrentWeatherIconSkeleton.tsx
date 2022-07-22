/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import bg from './assets/Cloud-background.png'
import { useAppSelector } from '../../app/hooks'

export const CurrentWeatherIconSkeleton = () => {
	return (
		<div className='relative overflow-x-clip mb-5'>
			<img className='block scale-150 mt-16 opacity-5' src={bg} alt='Clouds' />
			<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-3xl bg-lightestGray opacity-5 animate-pulse' />
		</div>
	)
}
