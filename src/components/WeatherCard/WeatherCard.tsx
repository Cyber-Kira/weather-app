import React from 'react'
import { Temperature, WeatherIcon } from './components'

interface Props {
	timestamp: number
	min: number
	max: number
}

export const WeatherCard = ({ min, max, timestamp }: Props) => {
	const date = new Date(timestamp * 1000)
		.toUTCString()
		.split(' ')
		.slice(0, 3)
		.join(' ')

	const tommorowTimestamp = new Date().setDate(new Date().getDate() + 1)
	const tommorow = new Date(tommorowTimestamp)
		.toUTCString()
		.split(' ')
		.slice(0, 3)
		.join(' ')

	return (
		<div className='flex flex-col items-center max-w-[120px] max-h-[177px] min-w-[120px] py-[1.125rem] bg-backgroundLight'>
			<span className='font-raleway font-medium text-base leading-[19px] text-lightestGray'>
				{date === tommorow ? 'Tomorrow' : date}
			</span>
			<WeatherIcon />
			<Temperature min={min} max={max} />
		</div>
	)
}
