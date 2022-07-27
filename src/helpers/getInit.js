import axios from 'axios';
import getWeather from './getWeather';

function getInit({ state, dispatch }) {
	let place;

	axios.get('https://ipapi.co/json').then((result) => {
		axios
			.get(
				`${process.env.REACT_APP_API_BASE_URL}/ip.json?key=c1d1c10cbda24036a2372844221407&q=${result.data.ip}`
			)
			.then((res) => {
				place = res.data.city;
				getWeather({ state, dispatch, place });
			});
	});
}

export default getInit;
