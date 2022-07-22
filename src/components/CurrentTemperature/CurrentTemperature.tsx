import React from 'react'
import { useAppSelector } from '../../app/hooks'
import { CurrentTemperatureSkeleton } from '../../lib/skeletons/CurrentTemperatureSkeleton'
import { toCelsius, toFahrenheit } from '../../lib/utils'

export const CurrentTemperature = () => {
	const { data, isLoading } = useAppSelector(store => store.weather)
	const { unit } = useAppSelector(store => store.application)

	const CurrentTemperatureElement = (
		<div className='flex justify-center md:mt-16'>
			<span className='font-raleway text-[144px] leading-[170px] font-medium text-lightestGray'>
				{unit === 'celcius'
					? toCelsius(data.current.temp)
					: toFahrenheit(data.current.temp)}
				<span className='font-raleway font-medium text-[48px] text-lightGray'>
					&deg;C
				</span>
			</span>
		</div>
	)

	return !isLoading ? CurrentTemperatureElement : <CurrentTemperatureSkeleton />
}
