// Latitude and Longitude (Decimal degree) e.g: q=48.8567,2.3508
import axios from 'axios';
import { dispatchTypes } from '../State/State';


function getByCoords({ state, dispatch, place	}) {
	// const BASE_URL = `http://api.weatherapi.com/v1`;
	axios
		.get(
			`${process.env.REACT_APP_API_BASE_URL}/forecast.json?key=c1d1c10cbda24036a2372844221407&q=${place||state.location.name || place}&days=1&aqi=no&alerts=no`
		)
		.then((result) => {
			dispatch({type: dispatchTypes.SET_DATA, payload: result.data})
		});
}

export default getByCoords;
