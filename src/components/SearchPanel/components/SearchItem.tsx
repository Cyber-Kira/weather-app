import React from 'react'
import { useAppDispatch } from '../../../app/hooks'
import { setMenu } from '../../../features/application/applicationSlice'
import { getWeatherByCoords } from '../../../features/data/weatherSlice'

interface Props {
	title: string
	latitude: number
	longitude: number
	setValue: React.Dispatch<React.SetStateAction<string>>
}

export const SearchItem = ({ title, latitude, longitude, setValue }: Props) => {
	const dispatch = useAppDispatch()

	const handleClick = () => {
		dispatch(
			getWeatherByCoords({
				latitude,
				longitude,
			})
		)
		dispatch(setMenu(false))
		setValue('')
		document.body.classList.toggle('scrollable')
	}

	return (
		<button
			type='button'
			className='flex justify-between items-center h-16 border border-transparent px-3 w-full hover:border-dimmedGray focus:border-lightestGray focus-visible:outline-none focus-visible:border-lightestGray transition-colors'
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
