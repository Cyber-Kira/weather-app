import React from 'react'

export const CurrentDay = () => {
	return (
		<div className='flex gap-4 justify-center mt-12 md:mt-20'>
			<span className='font-raleway font-medium text-lg leading-5 text-gray'>
				Today
			</span>
			<span className='font-raleway font-medium text-lg leading-5 text-gray'>
				&bull;
			</span>
			<span className='font-raleway font-medium text-lg leading-5 text-gray'>
				Fri, 5 Jun
			</span>
		</div>
	)
}
