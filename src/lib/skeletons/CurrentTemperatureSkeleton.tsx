import React from 'react'

export const CurrentTemperatureSkeleton = () => {
	return (
		<div className='flex justify-center mt-14 md:mt-24'>
			<span className='w-1/2 bg-lightestGray h-24 rounded-3xl opacity-5 animate-pulse' />
		</div>
	)
}
