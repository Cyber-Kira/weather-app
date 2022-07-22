import React from 'react'

export const CurrentLocationSkeleton = () => {
	return (
		<div className='flex items-center justify-center gap-1 mt-8 mb-8'>
			<div className='w-1/2 h-6 bg-lightestGray opacity-5 rounded-3xl animate-pulse' />
		</div>
	)
}
