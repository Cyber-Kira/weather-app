import React from 'react'
import { useAppSelector } from '../../app/hooks'
import { CurrentLocationSkeleton } from '../../lib/skeletons/CurrentLocationSkeleton'

export const CurrentLocation = () => {
	const { currentCity, isLoading } = useAppSelector(store => store.weather)

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const CurrentLocationElement = (
		<div className='flex items-center justify-center gap-1 mt-8 mb-8'>
			<span className='material-icons text-gray'>location_on</span>
			<span className='font-raleway font-semibold text-lg leading-5 text-gray'>
				{isLoading ? '...' : currentCity}
			</span>
		</div>
	)

	return !isLoading ? CurrentLocationElement : <CurrentLocationSkeleton />
}
