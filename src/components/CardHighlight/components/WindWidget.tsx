import React from 'react'

export const WindWidget = ({ deg }: { deg?: number }) => {
	return (
		<div className='flex items-center justify-center gap-4 mt-6'>
			<span
				className='material-icons text-gray'
				style={{
					transform: `rotate(${deg}deg)`,
				}}
			>
				assistant_navigation
			</span>
			<span className='font-raleway font-medium text-sm leading-[17px] text-lightestGray'>
				WSW
			</span>
		</div>
	)
}
