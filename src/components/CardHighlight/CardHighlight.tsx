import React from 'react'
import { HumidityWidget } from './components/HumidityWidget'
import { WindWidget } from './components/WindWidget'

interface Props {
	title: string
	units: string
	value: number
	widget?: string
	deg?: number
	percentage?: number
}

export const CardHighlight = ({
	title,
	units,
	value,
	widget,
	deg,
	percentage,
}: Props) => {
	let weatherWidget

	if (widget === 'wind') {
		weatherWidget = <WindWidget deg={deg} />
	} else if (widget === 'humidity') {
		weatherWidget = <HumidityWidget percentage={percentage} />
	}

	if (units === 'km') {
		value = Number((value / 1000).toFixed(1))
	}

	return (
		<div className='flex flex-col items-center justify-center md:basis-1/2 max-h-[204px] py-[1.375rem] md:mx-auto w-full bg-backgroundLight'>
			<span className='font-raleway font-medium text-base leading-[19px] text-lightestGray'>
				{title}
			</span>
			<span className='font-raleway mt-1 font-bold text-[4rem] leading-[75px] text-lightestGray'>
				{value}
				<span className='font-raleway font-medium text-4xl text-lightestGray ml-1'>
					{units}
				</span>
			</span>
			{weatherWidget}
		</div>
	)
}
