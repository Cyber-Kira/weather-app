import React from 'react'

export const CardHighlightSkeleton = () => {
	return (
		<div className='flex flex-col items-center justify-center gap-5 md:basis-1/2 max-h-[204px] py-[1.375rem] px-8 md:mx-auto w-full bg-backgroundLight'>
			<div className='w-full rounded-xl h-7 bg-lightestGray opacity-5 animate-pulse' />
			<div className='w-full rounded-xl h-7 bg-lightestGray opacity-5 animate-pulse' />
			<div className='w-full rounded-xl h-7 bg-lightestGray opacity-5 animate-pulse' />
		</div>
	)
}
