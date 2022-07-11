import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './app/store'
import './index.css'

const container = document.getElementById('root')!
const root = createRoot(container)

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<div className='font-raleway text-xl font-medium p-14 text-white'>
				Testing
			</div>
			<div className='fixed inset-0 bg-[#1E213A] -z-10' />
		</Provider>
	</React.StrictMode>
)
