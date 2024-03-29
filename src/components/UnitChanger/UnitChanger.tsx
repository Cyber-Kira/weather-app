import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { setUnit } from '../../features/application/applicationSlice'

export const UnitChanger = () => {
	const { unit } = useAppSelector(store => store.application)
	const dispatch = useAppDispatch()

	const handleClick = (value: 'celcius' | 'fahrenheit') => {
		dispatch(setUnit(value))
	}

	return (
		<fieldset className='hidden md:flex mt-[2.625rem]'>
			<div className='flex gap-3 ml-auto'>
				<div className='relative w-10 h-10 rounded-full'>
					<label
						className='flex justify-center items-center absolute inset-0 rounded-full cursor-pointer'
						htmlFor='celsius'
					>
						<input
							className='appearance-none rounded-full absolute inset-0 peer'
							type='radio'
							name='units'
							id='celsius'
							checked={unit === 'celcius'}
							onChange={() => handleClick('celcius')}
						/>
						<div className='bg-buttonText peer-checked:bg-lightestGray peer absolute inset-0 rounded-full transition-colors' />
						<span className='font-raleway font-bold text-lg leading-[21px] text-lightestGray peer-checked:text-darkBlue isolate'>
							&deg;C
						</span>
					</label>
				</div>
				<div className='relative w-10 h-10 rounded-full'>
					<label
						className='flex justify-center items-center absolute inset-0 rounded-full cursor-pointer'
						htmlFor='fahrenheit'
					>
						<input
							className='appearance-none rounded-full absolute inset-0 peer'
							type='radio'
							name='units'
							id='fahrenheit'
							checked={unit === 'fahrenheit'}
							onChange={() => handleClick('fahrenheit')}
						/>
						<div className='bg-buttonText peer-checked:bg-lightestGray absolute inset-0 rounded-full transition-colors' />
						<span className='font-raleway font-bold text-lg leading-[21px] text-lightestGray peer-checked:text-darkBlue isolate'>
							&deg;F
						</span>
					</label>
				</div>
			</div>
		</fieldset>
	)
}
