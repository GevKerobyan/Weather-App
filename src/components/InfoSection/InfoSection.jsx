
const InfoSection = ({ state, dispatch }) => {

   const { location, weatherData } = state;
   let system = 'c'
   if (state.dataType === 'imperial') {
      system = 'f'
   }

   return (
      <div>
         <div className="infoContainer">
            <div className="top">
               <div className="location">
                  <h1>{location.name}</h1>
                  <img src={weatherData.condition?.icon}></img>
               </div>
               <div className="weatherInfo">
                  <div className="temperature">
                     <span>Temperature</span>
                     {state.dataType ?
                        <h2>{weatherData.temp_c}{'\u00b0'}</h2>
                        : <h2>{weatherData.temp_f}{'\u00b0'}</h2>
                     }
                  </div>
                  <div className="visibility">
                     <span>Visibility</span>
                     {state.dataType ?
                        <h2>{weatherData.vis_km} <span style={{fontSize: '20px'}}>km</span></h2>
                        : <h2>{weatherData.vis_miles}<span style={{fontSize: '20px'}}>ml</span></h2>
                     }
                  </div>
               </div>

            </div>

            <div className="bottom">
               <div className="feels">
                  {/* {data?.main ? <p className='bold'>{data.main.feels_like.toFixed()}°F</p> : null} */}
                  <p>Feels Like</p>
               </div>
               <div className="humidity">
                  {/* {data?.main ? <p className='bold'>{data.main.humidity}%</p> : null} */}
                  <p>Humidity</p>
               </div>
               <div className="wind">
                  {/* {data?.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null} */}
                  <p>Wind Speed</p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default InfoSection