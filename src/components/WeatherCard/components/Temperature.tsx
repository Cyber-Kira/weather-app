import React from 'react'

export const Temperature = () => {
	return (
		<div className='flex items-center justify-between gap-4'>
			<span className='font-raleway font-medium text-base leading-[19px] text-lightestGray'>
				16
				<span className='font-raleway font-medium text-base leading-[19px] text-lightestGray'>
					&deg;C
				</span>
			</span>
			<span className='font-raleway font-medium text-base leading-[19px] text-lightGray'>
				11
				<span className='font-raleway font-medium text-base leading-[19px] text-lightGray'>
					&deg;C
				</span>
			</span>
		</div>
	)
}
