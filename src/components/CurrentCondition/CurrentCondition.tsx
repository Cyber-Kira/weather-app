import React from 'react'
import { useAppSelector } from '../../app/hooks'

export const CurrentCondition = () => {
	const { data } = useAppSelector(store => store.weather)

	return (
		<div className='flex justify-center md:mt-10'>
			<span className='font-raleway font-semibold text-4xl text-lightGray'>
				{data.current.weather[0].main}
			</span>
		</div>
	)
}
