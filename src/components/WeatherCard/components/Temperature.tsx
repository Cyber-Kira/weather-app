import React from 'react'
import { useAppSelector } from '../../../app/hooks'
import { toCelsius, toFahrenheit } from '../../../lib/utils'

interface Props {
	min: number
	max: number
}

export const Temperature = ({ min, max }: Props) => {
	const { unit } = useAppSelector(store => store.application)

	return (
		<div className='flex items-center justify-between gap-4'>
			<span className='font-raleway font-medium text-base leading-[19px] text-lightestGray'>
				{unit === 'celcius' ? toCelsius(min) : toFahrenheit(min)}
				<span className='font-raleway font-medium text-base leading-[19px] text-lightestGray'>
					&deg;{unit === 'celcius' ? 'C' : 'F'}
				</span>
			</span>
			<span className='font-raleway font-medium text-base leading-[19px] text-lightGray'>
				{unit === 'celcius' ? toCelsius(max) : toFahrenheit(max)}
				<span className='font-raleway font-medium text-base leading-[19px] text-lightGray'>
					&deg;{unit === 'celcius' ? 'C' : 'F'}
				</span>
			</span>
		</div>
	)
}
