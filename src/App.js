import React, { useEffect, useReducer, useRef } from 'react';
import "@reach/combobox/styles.css";
import { MapSection, InfoSection, NavBar } from './components';
import { InitialState, reducer } from './State/State';
import getInit from './helpers/getInit';
import SecondPage from './components/SecondPage/SecondPage';
import { useLoadScript } from '@react-google-maps/api';
import useScrollHandler from './helpers/useScrollHandler';

function App() {
	const [state, dispatch] = useReducer(reducer, InitialState);

	const secondPage = useRef();
	
	const { isLoaded, loadError } = useLoadScript({
		googleMapsApiKey: 'AIzaSyCFppXDLIH45Wt4_1ZD4gRJPxQS5_pSTx0',
		libraries: process.env.REAC_APP_MAP_LIBRARIES,
	});
// const element = document.getElementById('scrollCheck')
// window.addEventListener('scroll', useScrollHandler())

	useEffect(() => {
		getInit({ state, dispatch });
	}, []);

	useEffect(() => {
		console.log('consoling: state in app :::', state);
	}, [state]);
	return (
		<div className='app'>
			<NavBar
				isLoaded={isLoaded}
				loadError={loadError}
				state={state}
				dispatch={dispatch}
			></NavBar>
			<div className='pageWrapper'>
				<div className='firstPage'>
					<InfoSection id='scrollCheck' className='info' state={state} dispatch={dispatch} />

					<div className='mapContainer'>
						{state.location ? (
							<MapSection
								className='map'
								isLoaded={isLoaded}
								loadError={loadError}
								state={state}
								dispatch={dispatch}
							></MapSection>
						) : (
							'Loading...'
						)}
					</div>
				</div>
				<SecondPage  state={state} dispatch={dispatch} />
				<div ref={secondPage}></div>
			</div>
		</div>
	);
}

export default App;
