import React, { useEffect, useReducer, useState } from 'react';
import { MapSection, InfoSection, NavBar } from './components';
import { InitialState, reducer, dispatchTypes } from './context/State';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import getCurrent from './helpers/getCurrent';
import getInit from './helpers/getInit';

function App() {
	const [state, dispatch] = useReducer(reducer, InitialState);

	useEffect(() => {
		getInit({ state, dispatch });
	}, []);

	return (
		<div className='app'>
			<NavBar state={state} dispatch={dispatch}>
			</NavBar>
<div className='pageWrapper'>
			<InfoSection className='info' state={state} dispatch={dispatch} />

			{/* {!isLoaded ? (
					<div>Loading...</div>
				) : ( */}
			<MapSection className='map' state={state} dispatch={dispatch}></MapSection>
			{/* )} */}
</div>
		</div>
	);
}

export default App;
