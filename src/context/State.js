import React, { useReducer } from 'react';
import StateContext from './stateContext';
import stateReducer from './stateReducer';

function State(props) {
	const InitialState = {
		system: 'metric',
		currentCity: {
         name: '',
         coords: {
            lat: '',
            lng: '',
         }
      },
		data: {},
	};

	const [state, dispatch] = useReducer(stateReducer, State);
	return (
		<StateContext.Provider value={{state, dispatch}}>{props.children}</StateContext.Provider>
	);
}

export default State;
