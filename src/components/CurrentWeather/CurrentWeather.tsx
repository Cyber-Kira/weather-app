import React from 'react'
import { CardHighlight } from '../CardHighlight'
import { CurrentCondition } from '../CurrentCondition'
import { CurrentDay } from '../CurrentDay'
import { CurrentLocation } from '../CurrentLocation'
import { CurrentTemperature } from '../CurrentTemperature'
import { CurrentWeatherIcon } from '../CurrentWeatherIcon'
import { Header } from '../Header'
import { SearchPanel } from '../SearchPanel'
import { UnitChanger } from '../UnitChanger'
import { WeatherForecast } from '../WeatherForecast'

export const CurrentWeather = () => {
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
						<div className='flex flex-wrap md:grid grid-cols-2 gap-8 md:gap-12 mb-8'>
							<CardHighlight
								title='Wind status'
								value={7}
								units='mph'
								widget='wind'
							/>
							<CardHighlight
								title='Humidity'
								value={84}
								units='%'
								widget='humidity'
							/>
							<CardHighlight title='Visibility' units='km' value={101} />
							<CardHighlight title='Air Pressure' value={998} units='mb' />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
