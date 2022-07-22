import React from 'react'
import { useAppSelector } from '../../app/hooks'
import { CardHighlightSkeleton } from '../../lib/skeletons/CardHightlightSkeleton'
import { CardHighlight } from '../CardHighlight'

export const HighlightList = () => {
	const { data, isLoading } = useAppSelector(store => store.weather)

	const HighlightListSkeleton = (
		<>
			<CardHighlightSkeleton />
			<CardHighlightSkeleton />
			<CardHighlightSkeleton />
			<CardHighlightSkeleton />
		</>
	)

	const HighlightListElement = (
		<>
			<CardHighlight
				title='Wind status'
				value={Number(data.current.wind_speed.toFixed(0))}
				units='mph'
				deg={data.current.wind_deg}
				widget='wind'
			/>
			<CardHighlight
				title='Humidity'
				value={data.current.humidity}
				percentage={data.current.humidity}
				units='%'
				widget='humidity'
			/>
			<CardHighlight
				title='Visibility'
				units='km'
				value={data.current.visibility}
			/>
			<CardHighlight
				title='Air Pressure'
				value={data.current.pressure}
				units='mb'
			/>
		</>
	)

	return (
		<div className='flex flex-wrap md:grid grid-cols-2 gap-8 md:gap-12 mb-8'>
			{!isLoading ? HighlightListElement : HighlightListSkeleton}
		</div>
	)
}
