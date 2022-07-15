import axios from "axios"
import { useReducer, useState } from "react"
import State from "../../context/State";
import stateReducer from "../../context/stateReducer";

const InfoSection = ({ APIKey, data, location }) => {
	const [state, dispatch] = useReducer(stateReducer, State);



   // const url = `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_APIKey}&q=Paris&aqi=no`;
	// const header = {
	// 	key: APIKey,
	// };
	// const searchLocation = (event) => {
	// 	if (event.key === 'Enter') {
	// 		axios.get(url).then((response) => {
	// 			setData(response.data);
	// 			console.log(response.data);
	// 		});
	// 		setLocation('');
	// 	}
	// };

   return (
      <div>
         <div className="infoContainer">
            <div className="top">
               <div className="location">
                  <p>{state.currentCity?.name}</p>
               </div>
               <div className="temp">
                  {/* {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null} */}
               </div>
               <div className="description">
                  {/* {data.weather ? <p>{data.weather[0].main}</p> : null} */}
               </div>
            </div>

               <div className="bottom">
                  <div className="feels">
                     {data?.main ? <p className='bold'>{data.main.feels_like.toFixed()}°F</p> : null}
                     <p>Feels Like</p>
                  </div>
                  <div className="humidity">
                     {data?.main ? <p className='bold'>{data.main.humidity}%</p> : null}
                     <p>Humidity</p>
                  </div>
                  <div className="wind">
                     {data?.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
                     <p>Wind Speed</p>
                  </div>
               </div>
         </div>
      </div>
   )
}

export default InfoSection