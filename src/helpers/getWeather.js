import axios from 'axios';
import { dispatchTypes } from '../State/State';

function getWeather({ state, dispatch, place	}) {
	const BASE_URL = `https://api.weatherapi.com/v1`;
	axios
		.get(
			`${BASE_URL}/forecast.json?key=c1d1c10cbda24036a2372844221407&q=${place||state.location.name || place}&days=1&aqi=no&alerts=no`
		)
		.then((result) => {
			dispatch({type: dispatchTypes.SET_DATA, payload: result.data})
		});
}

export default getWeather;
