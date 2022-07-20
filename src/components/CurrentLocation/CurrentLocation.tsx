import React from 'react'
import { useAppSelector } from '../../app/hooks'

export const CurrentLocation = () => {
	const { data } = useAppSelector(store => store.weather)
	return (
		<div className='flex items-center justify-center gap-1 mt-8 mb-8'>
			<span className='material-icons text-gray'>location_on</span>
			<span className='font-raleway font-semibold text-lg leading-5 text-gray'>
				{data.timezone.split('/')[1]}
			</span>
		</div>
	)
}
