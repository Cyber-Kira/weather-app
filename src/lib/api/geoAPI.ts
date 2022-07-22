import axios, { AxiosError, AxiosResponse } from 'axios'

const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities'

export const fetchLocations = (locationString: string) => {
	return axios
		.request({
			method: 'GET',
			url,
			params: { namePrefix: locationString, limit: '5', sort: '-population' },
			headers: {
				'X-RapidAPI-Key': `${process.env.REACT_APP_SECRET_GEO_KEY}`,
				'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
			},
		})
		.then((response: AxiosResponse) => {
			return response.data
		})
		.catch((error: AxiosError) => {
			// eslint-disable-next-line no-console
			console.error(error)
		})
}

export const fetchByCoords = (lat: number, lon: number) => {
	return axios
		.request({
			method: 'GET',
			url,
			params: {
				location: `${lat > 0 ? `+${lat}` : `${lat}`}${
					lon > 0 ? `+${lon}` : `${lon}`
				}`,
				limit: '1',
			},
			headers: {
				'X-RapidAPI-Key': `${process.env.REACT_APP_SECRET_GEO_KEY}`,
				'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
			},
		})
		.then((response: AxiosResponse) => {
			return response.data
		})
		.catch((error: AxiosError) => {
			// eslint-disable-next-line no-console
			console.error(error)
		})
}
