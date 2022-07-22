import React from 'react'
import { useAppSelector } from '../../../app/hooks'
import { WeatherType } from '../../../lib/api/weatherAPI'
import Clear from './assets/Clear.png'
import Hail from './assets/Hail.png'
import HeavyCloud from './assets/HeavyCloud.png'
import HeavyRain from './assets/HeavyRain.png'
import LightCloud from './assets/LightCloud.png'
import LightRain from './assets/LightRain.png'
import Shower from './assets/Shower.png'
import Sleet from './assets/Sleet.png'
import Snow from './assets/Snow.png'
import Mist from './assets/mist.png'
import Thunderstorm from './assets/Thunderstorm.png'

export const WeatherIcon = ({ img }: { img: WeatherType }) => {
	const { data } = useAppSelector(store => store.weather)

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

	return (
		<img
			className='max-w-[55px] h-auto mt-[0.625rem] mb-[1.9375rem]'
			src={images[img] ?? Mist}
			alt={data.current.weather[0].main}
		/>
	)
}
