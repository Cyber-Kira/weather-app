import React from 'react'
import { useAppSelector } from '../../app/hooks'
import { CurrentConditionSkeleton } from '../../lib/skeletons/CurrentConditionSkeleton'

export const CurrentCondition = () => {
	const { data, isLoading } = useAppSelector(store => store.weather)

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const CurrentConditionElement = (
		<div className='flex justify-center md:mt-10'>
			<span className='font-raleway font-semibold text-4xl text-lightGray'>
				{data ? data.current.weather[0].main : '...'}
			</span>
		</div>
	)

	return !isLoading ? CurrentConditionElement : <CurrentConditionSkeleton />
}
