import axios from 'axios';
import { dispatchTypes } from '../context/State';

function getCurrent({ state, dispatch, place }) {
   console.log('consoling: place :::', place )
	const BASE_URL = `http://api.weatherapi.com/v1`;
	axios
		.get(`${BASE_URL}/current.json?key=c1d1c10cbda24036a2372844221407&q=${place}`)
		.then((result) => {
			console.log('consoling: result :::', result.data )
			dispatch({
				type: dispatchTypes.CHANGE_LOCATION,
				payload: result.data,
			});
		});
}

export default getCurrent;
