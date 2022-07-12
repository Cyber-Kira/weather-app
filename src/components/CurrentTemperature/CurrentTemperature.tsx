import React from 'react'

export const CurrentTemperature = () => {
	return (
		<div className='flex justify-center md:mt-16'>
			<span className='font-raleway text-[144px] leading-[170px] font-medium text-lightestGray'>
				15
				<span className='font-raleway font-medium text-[48px] text-lightGray'>
					&deg;C
				</span>
			</span>
		</div>
	)
}
