import React from 'react'
import { degToCompass } from '../../../lib/utils'

export const WindWidget = ({ deg }: { deg: number }) => {
	return (
		<div className='flex items-center justify-center gap-3 mt-6'>
			<div className='bg-gray rounded-full p-[.375rem] grid items-center'>
				<span
					className='material-icons text-sm w-4 h-4 flex items-center justify-center text-lightestGray'
					style={{
						transform: `rotate(${deg}deg)`,
					}}
				>
					navigation
				</span>
			</div>
			<span className='font-raleway font-medium text-sm leading-[17px] text-lightestGray'>
				{degToCompass(deg)}
			</span>
		</div>
	)
}
