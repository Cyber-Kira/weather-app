import React from 'react'

export const CurrentConditionSkeleton = () => {
	return (
		<div className='flex justify-center mt-16 md:mt-28'>
			<span className='w-1/2 h-10 bg-lightestGray opacity-5 rounded-3xl animate-pulse' />
		</div>
	)
}
