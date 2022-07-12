import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './app/store'
import { CurrentWeather } from './components'
import './index.css'

const container = document.getElementById('root')!
const root = createRoot(container)

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<CurrentWeather />
		</Provider>
	</React.StrictMode>
)
