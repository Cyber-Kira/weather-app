import React, { useEffect } from 'react'
import { useAppDispatch } from '../../app/hooks'
import { setDate } from '../../features/application/applicationSlice'
import { getWeather } from '../../features/data/weatherSlice'
import { CurrentCondition } from '../CurrentCondition'
import { CurrentDay } from '../CurrentDay'
import { CurrentLocation } from '../CurrentLocation'
import { CurrentTemperature } from '../CurrentTemperature'
import { CurrentWeatherIcon } from '../CurrentWeatherIcon'
import { Header } from '../Header'
import { HighlightList } from '../HightlightList'
import { SearchPanel } from '../SearchPanel'
import { UnitChanger } from '../UnitChanger'
import { WeatherForecast } from '../WeatherForecast'

export const CurrentWeather = () => {
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(setDate())
		dispatch(getWeather({}))
	}, [])

	return (
		<div className='bg-backgroundLight'>
			<div className='md:flex'>
				<div className='relative basis-1/4 min-h-screen md:overflow-auto'>
					<SearchPanel />
					<Header />
					<CurrentWeatherIcon />
					<CurrentTemperature />
					<CurrentCondition />
					<CurrentDay />
					<CurrentLocation />
				</div>
				<div className='basis-3/4 px-6 min-h-screen overflow-auto bg-backgroundDark'>
					<div className='flex flex-col max-w-[704px] mx-auto'>
						<UnitChanger />
						<WeatherForecast />
						<h2 className='font-raleway font-bold text-2xl leading-[28px] mt-5 mb-8 text-lightestGray'>
							Today’s Hightlights{' '}
						</h2>
						<HighlightList />
					</div>
				</div>
			</div>
		</div>
	)
}
