import React from 'react'

export const HumidityWidget = ({
	percentage = 50,
}: {
	percentage?: number
}) => {
	return (
		<div className='flex flex-col justify-center items-center  w-full max-w-[14.375rem] '>
			<div className='flex justify-between items-center w-full '>
				<span className='font-raleway font-bold text-xs leading-[14px] text-lightGray'>
					0
				</span>
				<span className='font-raleway font-bold text-xs leading-[14px] text-lightGray'>
					50
				</span>
				<span className='font-raleway font-bold text-xs leading-[14px] text-lightGray'>
					100
				</span>
			</div>
			<div className='w-full h-2 rounded-full bg-lightestGray mt-0.5 mb-[.25rem]'>
				<div
					className='h-2 rounded-full bg-accentYellow'
					style={{
						width: `${percentage}%`,
					}}
				/>
			</div>
			<span className='font-raleway font-bold text-xs leading-[14px] text-lightGray self-end'>
				%
			</span>
		</div>
	)
}
