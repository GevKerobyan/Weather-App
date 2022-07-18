import axios from 'axios';
import { createContext } from 'react';

const BASE_URL = `http://api.weatherapi.com/v1`;

// ----- DEFAULT STATE ----- \\
const InitialState = {
	dataType: true,
	location: {},
	weatherData: {},
};

// ----- ACTION TYPES ----- \\
const dispatchTypes = {
	INITIAL_LOAD: 'INITIAL_LOAD',
	CHANGE_LOCATION: 'SET_SEARCH_LOCATION',
	CHANGE_SYSTEM: 'CHANGE_SYSTEM',
};

// ----- REDUCER ----- \\
const reducer = (state, action) => {
	const { type, payload } = action;

	switch (type) {
		case dispatchTypes.INITIAL_LOAD: {
			// console.log('consoling: payload :::', payload )
			return {
				...state,
				location: payload.location,
				weatherData: payload.current,
			};
		}

		case dispatchTypes.CHANGE_LOCATION: {
			return {
				...state,
				location: payload.location,
				weatherData: payload.current,
			};
		}

		case dispatchTypes.CHANGE_SYSTEM: {
			return {
				...state,
				dataType: !state.dataType,
			};
		}
	}
};

export { InitialState, reducer, dispatchTypes };
