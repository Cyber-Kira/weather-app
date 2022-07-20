import React from 'react'
import { fahrenheitToCelsius } from '../../../lib/utils'

interface Props {
	min: number
	max: number
}

export const Temperature = ({ min, max }: Props) => {
	return (
		<div className='flex items-center justify-between gap-4'>
			<span className='font-raleway font-medium text-base leading-[19px] text-lightestGray'>
				{fahrenheitToCelsius(max)}
				<span className='font-raleway font-medium text-base leading-[19px] text-lightestGray'>
					&deg;C
				</span>
			</span>
			<span className='font-raleway font-medium text-base leading-[19px] text-lightGray'>
				{fahrenheitToCelsius(min)}
				<span className='font-raleway font-medium text-base leading-[19px] text-lightGray'>
					&deg;C
				</span>
			</span>
		</div>
	)
}
