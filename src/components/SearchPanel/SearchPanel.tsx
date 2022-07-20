import React, { useState } from 'react'
import { SearchItem } from './components/SearchItem'

export const SearchPanel = () => {
	const [value, setValue] = useState()
	const [isSidePanelOpen, setIsSidePanelOpen] = useState(false)

	const handleClick = (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		event.preventDefault()
	}

	return (
		<div
			className={`absolute flex flex-col w-full bg-backgroundLight min-h-screen px-3 py-4 z-20 ${
				isSidePanelOpen ? '' : '-translate-x-full'
			} transition-transform duration-300`}
		>
			<button
				className='grid items-center ml-auto w-10 h-10'
				type='button'
				onClick={() => {
					setIsSidePanelOpen(false)
					document.body.classList.toggle('scrollable')
				}}
			>
				<span className='material-icons text-lightestGray'>close</span>
			</button>
			<form className='flex justify-center items-center mt-5 gap-3'>
				<div className='relative h-12 w-full'>
					<span className='material-symbols-outlined absolute left-3 top-1/2 -translate-y-[50%] text-dimmedGray pointer-events-none'>
						search
					</span>
					<input
						className='font-raleway font-medium text-base leading-[19px] w-full h-12 bg-transparent border outline-none focus:outline-none border-dimmedGray focus:border-lightestGray placeholder-dimmedGray text-lightestGray pl-12 transition-colors'
						type='text'
						value={value}
						placeholder='search location'
						onChange={() => setValue}
					/>
				</div>
				<button
					className='font-raleway font-semibold text-base leading-[19px] w-full max-w-[5.375rem] h-12 bg-accentBlue text-lightestGray focus:outline focus:outline-accentYellow'
					type='submit'
					onClick={e => handleClick(e)}
				>
					Search
				</button>
			</form>
			<div className='grid gap-4 mt-10'>
				<SearchItem />
				<SearchItem />
				<SearchItem />
			</div>
		</div>
	)
}
