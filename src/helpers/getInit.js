import axios from 'axios';
import { dispatchTypes } from '../State/State';
import getWeather from './getWeather';

function getInit({ state, dispatch }) {
	let place;
	axios.get('https://ipapi.co/json').then((res) => {
		place = res.data.city;
		getWeather({ state, dispatch, place });
	});
}

export default getInit;
