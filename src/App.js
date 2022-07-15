import React, { useEffect, useReducer, useState } from 'react';
import { MapSection, InfoSection, SearchBar } from './components';
import { INITIAL_LOAD } from './context/dispatchTypes';
import State from './context/State';
import StateContext from './context/stateContext';
import stateReducer from './context/stateReducer';

function App() {

	const [state, dispatch] = useReducer(stateReducer, State);

// useEffect(()=> {
// 	dispatch({type: INITIAL_LOAD})
// }, [state])

	return (
		
		<State>
			<div className='app'>
				<img src={state.data?.condition.icon}></img>
				<SearchBar />

				<InfoSection
					className='info'

					// setLocation={setLocation}
				/>
				<MapSection className='map'></MapSection>
			</div>
		</State>
	);
}

export default App;
