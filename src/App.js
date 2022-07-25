import React, { useEffect, useReducer, useRef } from 'react';
import '@reach/combobox/styles.css';
import { useJsApiLoader } from '@react-google-maps/api';
import { MapSection, InfoSection, NavBar } from './components';
import { InitialState, reducer } from './State/State';
import getInit from './helpers/getInit';
import SecondPage from './components/SecondPage/SecondPage';

const libraries = ['places']

function App() {
	const [state, dispatch] = useReducer(reducer, InitialState);

	const { isLoaded } = useJsApiLoader({
		googleMapsApiKey: 'AIzaSyCFppXDLIH45Wt4_1ZD4gRJPxQS5_pSTx0',
		libraries,
	});



	const secondPage = useRef();

	useEffect(() => {
		getInit({ state, dispatch });
	}, []);

	useEffect(() => {
		console.log('consoling: state in app :::', state);
	}, [state]);
	return (
		<div className={`app ${state.weatherData.currentCondition}App`}>
			<NavBar isLoaded={isLoaded} state={state} dispatch={dispatch}></NavBar>
			<div className='pageWrapper'>
				<div className='firstPage'>
					<InfoSection
						id='scrollCheck'
						className='info'
						state={state}
					/>

					<div className='mapContainer'>
						{state.location ? (
							<MapSection
								className='map'
								isLoaded={isLoaded}
								state={state}
								dispatch={dispatch}
							></MapSection>
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
