import React, { useEffect, useReducer, useRef } from 'react';
import { useJsApiLoader } from '@react-google-maps/api';
import { MapSection, InfoSection, NavBar, SecondPage } from './components';
import { InitialState, reducer } from './State/State';
import {getInit} from './helpers';

const libraries = ['places'];

function App() {
	const [state, dispatch] = useReducer(reducer, InitialState);

	const { isLoaded } = useJsApiLoader({
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
		libraries,
	});

	const secondPage = useRef();

	useEffect(() => {
		getInit({ state, dispatch });
	}, []);

	return (
		<div className={`app ${state.weatherData.currentCondition}App`}>
			<NavBar isLoaded={isLoaded} state={state} dispatch={dispatch}></NavBar>
			<div className='page-wrapper'>
				<div className='first-page'>
					<InfoSection id='scrollCheck' className='info' state={state} />
					<div className='map-container'>
						{state.location ? (
							<MapSection
								className='map'
								isLoaded={isLoaded}
								state={state}
								dispatch={dispatch}
							/>
						) : (
							'Loading...'
						)}
					</div>
				</div>
				<SecondPage state={state} dispatch={dispatch} />
				<div ref={secondPage}></div>
			</div>
		</div>
	);
}

export default App;
