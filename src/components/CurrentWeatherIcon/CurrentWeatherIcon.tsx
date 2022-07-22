/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import Clear from './assets/Clear.png'
import Hail from './assets/Hail.png'
import HeavyCloud from './assets/HeavyCloud.png'
import HeavyRain from './assets/HeavyRain.png'
import LightCloud from './assets/LightCloud.png'
import LightRain from './assets/LightRain.png'
import Shower from './assets/Shower.png'
import Sleet from './assets/Sleet.png'
import Snow from './assets/Snow.png'
import Thunderstorm from './assets/Thunderstorm.png'
import Mist from './assets/mist.png'
import bg from './assets/Cloud-background.png'
import { useAppSelector } from '../../app/hooks'
import { CurrentWeatherIconSkeleton } from '../../lib/skeletons/CurrentWeatherIconSkeleton'

export const CurrentWeatherIcon = () => {
	const { data, isLoading } = useAppSelector(store => store.weather)

	const images = {
		Clear,
		Hail,
		Haze: HeavyCloud,
		Rain: HeavyRain,
		Clouds: LightCloud,
		Drizzle: LightRain,
		Shower,
		Sleet,
		Snow,
		Thunderstorm,
	}

	const CurrentWeatherElement = (
		<div className='relative overflow-x-clip mb-5'>
			<img className='block scale-150 mt-16 opacity-5' src={bg} alt='Clouds' />
			<img
				className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-75 md:scale-90'
				src={images[data.current.weather[0].main] ?? Mist}
				alt={data.current.weather[0].main}
			/>
		</div>
	)

	return !isLoading ? CurrentWeatherElement : <CurrentWeatherIconSkeleton />
}
