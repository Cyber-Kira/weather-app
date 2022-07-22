import React from 'react'
import { useAppSelector } from '../../app/hooks'
import { WeatherType } from '../../lib/api/weatherAPI'
import { WeatherCardSkeleton } from '../../lib/skeletons/WeatherCardSkeleton'
import { Temperature, WeatherIcon } from './components'

interface Props {
	timestamp: number
	min: number
	max: number
	img: WeatherType
}

export const WeatherCard = ({ min, max, img, timestamp }: Props) => {
	const { isLoading } = useAppSelector(store => store.weather)
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

	const WeatherCardElement = (
		<div className='flex flex-col items-center justify-between max-w-[120px] max-h-[177px] min-w-[120px] py-[1.125rem] bg-backgroundLight'>
			<span className='font-raleway font-medium text-base leading-[19px] text-lightestGray'>
				{date === tommorow ? 'Tomorrow' : date}
			</span>
			<WeatherIcon img={img} />
			<Temperature min={min} max={max} />
		</div>
	)

	return !isLoading ? WeatherCardElement : <WeatherCardSkeleton />
}
