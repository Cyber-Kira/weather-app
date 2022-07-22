import React from 'react'

export const WeatherCardSkeleton = () => {
	return (
		<div className='flex flex-col items-center justify-between px-2 max-w-[120px] min-h-[177px] min-w-[120px] py-[1.125rem] bg-backgroundLight w-full'>
			<div className='w-full h-6 bg-dimmedGray rounded-3xl opacity-5 animate-pulse' />
			<div className='w-14 h-14 bg-dimmedGray rounded-full opacity-5 animate-pulse' />
			<div className='w-full h-6 bg-dimmedGray rounded-3xl opacity-5 animate-pulse' />
		</div>
	)
}
