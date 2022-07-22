import React from 'react'
import { useAppDispatch } from '../../app/hooks'
import { setMenu } from '../../features/application/applicationSlice'
import { getWeather } from '../../features/data/weatherSlice'

export const Header = () => {
	const dispatch = useAppDispatch()

	const handleMenuClick = () => {
		document.body.classList.toggle('scrollable')
		dispatch(setMenu(true))
	}

	const handleLocationClick = () => {
		dispatch(getWeather())
	}

	return (
		<div>
			<div className='flex justify-between items-center pt-[2.625rem] px-3 md:px-11 flex-wrap gap-3'>
				<button
					type='button'
					className='bg-buttonLightGray px-[18px] pt-[11px] pb-[10px] shadow-button'
					onClick={handleMenuClick}
				>
					<p className='font-raleway font-medium text-lightestGray text-base leading-[19px]'>
						Search for places
					</p>
				</button>
				<button
					type='button'
					className='grid items-center bg-buttonLightGray drop-shadow-button w-10 h-10 rounded-full'
					onClick={handleLocationClick}
				>
					<span className='material-symbols-outlined text-lightestGray'>
						my_location
					</span>
				</button>
			</div>
		</div>
	)
}
