import React from 'react'

export const Header = () => {
	return (
		<div>
			<div className='flex justify-between items-center pt-[18px] px-3'>
				<button
					type='button'
					className='bg-buttonLightGray px-[18px] pt-[11px] pb-[10px] shadow-button'
				>
					<p className='font-raleway font-medium text-lightestGray text-base leading-[19px]'>
						Search for places
					</p>
				</button>
				<button
					type='button'
					className='grid items-center bg-buttonLightGray drop-shadow-button w-10 h-10 rounded-full'
				>
					<span className='material-symbols-outlined text-lightestGray'>
						my_location
					</span>
				</button>
			</div>
		</div>
	)
}
