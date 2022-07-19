// ----- DEFAULT STATE ----- \\
const InitialState = {
	dataType: true,
	location: '',
	weatherData: {
		current: {},
		forecast: {},
	},
};

// ----- ACTION TYPES ----- \\
const dispatchTypes = {
	SET_DATA: 'SET_DATA',
	CHANGE_LOCATION: 'CHANGE_LOCATION',
	CHANGE_SYSTEM: 'CHANGE_SYSTEM',
};

// ----- REDUCER ----- \\
const reducer = (state, action) => {
	const { type, payload } = action;

	switch (type) {
		case dispatchTypes.SET_DATA: {
			return {
				...state,
				location: payload.location,
				weatherData: {
					...state.weatherData,
					current: payload.current,
					forecast: payload.forecast.forecastday[0],
				},
			};
		}

		case dispatchTypes.CHANGE_LOCATION: {
			return {
				...state,
				location: payload,
			};
		}

		case dispatchTypes.CHANGE_SYSTEM: {
			return {
				...state,
				dataType: !state.dataType,
			};
		}
		default: console.log('wtf')
	}
};

export { InitialState, reducer, dispatchTypes };
