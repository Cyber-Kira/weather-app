import React from 'react'
import { useAppSelector } from '../../app/hooks'
import { fahrenheitToCelsius } from '../../lib/utils'

export const CurrentTemperature = () => {
	const { data } = useAppSelector(store => store.weather)

	return (
		<div className='flex justify-center md:mt-16'>
			<span className='font-raleway text-[144px] leading-[170px] font-medium text-lightestGray'>
				{fahrenheitToCelsius(data.current.temp)}
				<span className='font-raleway font-medium text-[48px] text-lightGray'>
					&deg;C
				</span>
			</span>
		</div>
	)
}
