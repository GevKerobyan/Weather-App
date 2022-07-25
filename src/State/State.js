const weatherCodes = {
	sunny: [1000],
	cloudy: [1003, 1006, 1009],
	foggy: [1030, 1135, 1147],
	rainy: [
		1063, 1069, 1087, 1180, 1183, 1186, 1189, 1192, 1195, 1198, 1201, 1240, 1243,
		1246, 1249, 1252, 1273, 1276,
	],
	snowy: [
		1066, 1072, 1114, 1117, 1150, 1153, 1168, 1171, 1204, 1207, 1210, 1213, 1216,
		1219, 1222, 1225, 1237, 1255, 1258, 1261, 1264, 1279, 1282,
	],
};

// ----- DEFAULT STATE ----- \\
const InitialState = {
	dataType: true,
	location: '',
	weatherData: {
		currentCondition:'',
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
	let code = payload?.current.condition.code;
	const [weatherType] = Object.keys(weatherCodes).filter((item) => {
		return weatherCodes[item].includes(code);
	});

	switch (type) {
		case dispatchTypes.SET_DATA: {
			

			return {
				...state,
				location: payload.location,
				weatherData: {
					...state.weatherData,
					currentCondition:weatherType,
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
		default:
			console.log("don't have any");
	}
};

export { InitialState, reducer, dispatchTypes };
