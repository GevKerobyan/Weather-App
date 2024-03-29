import axios from 'axios';
import { dispatchTypes } from '../State/State';

function getWeather({ state, dispatch, place	}) {
	axios
		.get(
			`${process.env.REACT_APP_API_BASE_URL}/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${place||state.location.name || place}&days=1&aqi=no&alerts=no`
		)
		.then((result) => {
			dispatch({type: dispatchTypes.SET_DATA, payload: result.data})
		});
}

export default getWeather;
