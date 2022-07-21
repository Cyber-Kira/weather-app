import React from 'react'
import { useAppDispatch } from '../../../app/hooks'
import { setMenu } from '../../../features/application/applicationSlice'
import { getWeather } from '../../../features/data/weatherSlice'

interface Props {
	title: string
	latitude: number
	longitude: number
}

export const SearchItem = ({ title, latitude, longitude }: Props) => {
	const dispatch = useAppDispatch()

	const handleClick = () => {
		dispatch(
			getWeather({
				locationLatitude: latitude,
				locationLongitude: longitude,
			})
		)
		dispatch(setMenu(false))
		document.body.classList.toggle('scrollable')
	}

	return (
		<button
			type='button'
			className='flex justify-between items-center h-16 border border-transparent px-3 w-full hover:border-dimmedGray focus:outline focus:outline-lightestGray transition-colors'
			onClick={handleClick}
		>
			<div className='flex items-center text-left h-full w-5/6'>
				<p className='font-raleway font-medium text-base leading-[19px] text-lightestGray'>
					{title}
				</p>
			</div>
			<span className='material-icons text-dimmedGray'>navigate_next</span>
		</button>
	)
}
