import axios from 'axios';
import getCurrent from './getCurrent';

function getInit({ state, dispatch }) {
   let place;
	axios.get('https://ipapi.co/json').then((res) => {
      place = res.data.city
		getCurrent({state, dispatch, place});
	});
}

export default getInit;
