import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MapSection, InfoSection } from './components';
import { svgs } from './assets/svgs';

function App() {
	const APIKey = 'c1d1c10cbda24036a2372844221407';
	const [data, setData] = useState({});
	const [location, setLocation] = useState({});
	const [searchCity, setSearchCity] = useState('');

	useEffect(() => {
		axios.get('https://ipapi.co/json').then((res) => setLocation(res.data.city));
	}, []);

	const url = `http://api.weatherapi.com/v1/current.json?key=${APIKey}&q=Paris&aqi=no`;
	const header = {
		key: APIKey,
	};
	const searchLocation = (event) => {
		if (event.key === 'Enter') {
			axios.get(url).then((response) => {
				setData(response.data);
				console.log(response.data);
			});
			setLocation('');
		}
	};

	const handleLocationSet = () => {};

	const getData = () => {
		axios
			.get(url)
			.then((res) => {
				setData(res.data.current);
				console.log('consoling: res :::', res);
			})
			.catch(console.log('vayqu'));
	};

	useEffect(() => {
		console.log(data);
		console.log('location', location);
	}, [data, location]);

	return (
		<div className='app'>
			<img src={data.condition?.icon}></img>
			<div className='search-input-wrapper'>
				<div className='search-input'>
					<input
						type='text'
						value={searchCity}
						placeholder={location}
						onChange={(e) => setSearchCity(e.target.value)}
						onKeyPress={(e) => handleLocationSet(e)}
					/>

					<div className='search-btn' onClick={(e) => handleLocationSet(e)}>
						{svgs.arrowRight}
					</div>
				</div>
			</div>

			<button
				style={{
					position: 'absolute',
					top: '50px',
					left: '50px',
					padding: '10px 20px',
					backgroundColor: 'rgba(255, 255, 255, 0.7)',
					border: 'none',
					borderRadius: '4px',
				}}
				onClick={getData}
			>
				get data
			</button>

			<InfoSection
				className='info'
				APIKey={APIKey}
				data={data}
				location={location}
				setLocation={setLocation}
				searchLocation={searchLocation}
			/>
			<MapSection APIKey={APIKey} className='map'></MapSection>
		</div>
	);
}

export default App;
