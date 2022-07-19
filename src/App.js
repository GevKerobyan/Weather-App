import React, { useEffect, useReducer } from 'react';
import { MapSection, InfoSection, NavBar } from './components';
import { InitialState, reducer } from './State/State';
import getInit from './helpers/getInit';
import SecondPage from './components/SecondPage/SecondPage';

function App() {
	const [state, dispatch] = useReducer(reducer, InitialState);

	useEffect(() => {
		getInit({ state, dispatch });
	}, []);

	useEffect(() => {
		console.log('consoling: state in app :::', state);
	}, [state]);
	return (
		<div className='app'>
			<NavBar state={state} dispatch={dispatch}></NavBar>
			<div className='pageWrapper'>
				<div className='firstPage'>
					<InfoSection className='info' state={state} dispatch={dispatch} />

					{/* {!isLoaded ? (
					<div>Loading...</div>
				) : ( */}
					<MapSection className='map' state={state} dispatch={dispatch}></MapSection>
				</div>
				{/* )} */}
				<SecondPage state={state} dispatch={dispatch}/>
			</div>
		</div>
	);
}

export default App;
