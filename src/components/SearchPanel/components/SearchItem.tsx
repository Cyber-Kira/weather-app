import React from 'react'

export const SearchItem = () => {
	return (
		<button
			type='button'
			className='flex justify-between items-center h-16 border border-transparent px-3 hover:border-dimmedGray focus:outline focus:outline-lightestGray transition-colors'
		>
			<p className='font-raleway font-medium text-base leading-[19px] text-lightestGray'>
				Longon
			</p>
			<span className='material-icons text-dimmedGray'>navigate_next</span>
		</button>
	)
}
