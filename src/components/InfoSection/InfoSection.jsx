import './InfoSectionStyles.css'

const InfoSection = ({ state }) => {
   const { location, weatherData } = state;
   return (
      <div>
         <div className={`info-container ${weatherData.currentCondition}`}>
            <div className='top'>
               <div className='location-and-icon'>
                  <div className='location'>
                     <h1>{location.name}</h1>
                     <h5>{location.country}</h5>
                  </div>
                  <img src={weatherData.current.condition?.icon}></img>
               </div>
               <div className='weather-info'>
                  <div className='weather-info-top'>
                     <div className='temperature container'>
                        <span>Temperature</span>
                        {state.dataType ?
                           <h2>{weatherData.current.temp_c}{'\u00b0'} C</h2>
                           : <h2>{weatherData.current.temp_f}{'\u00b0'} F</h2>
                        }
                     </div>
                     <div className='container'>
                        <span>Visibility</span>
                        {state.dataType ?
                           <h3>{weatherData.current.vis_km} <span style={{ fontSize: '20px' }}>km</span></h3>
                           : <h3>{weatherData.current.vis_miles}<span style={{ fontSize: '20px' }}>ml</span></h3>
                        }
                     </div>
                  </div>
                  <div className='weather-info-bottom'>
                     <div className='container-bottom'>
                        <span>Daily Max</span>
                        {state.dataType ?
                           <h3>{weatherData.forecast.day?.maxtemp_c} {'\u00b0'} C</h3>
                           : <h3>{weatherData.forecast.day.maxtemp_f} {'\u00b0'} F</h3>
                        }
                     </div>

                     <div className='container-bottom'>
                        <span>Daily Avg</span>
                        {state.dataType ?
                           <h3>{weatherData.forecast.day?.avgtemp_c} {'\u00b0'} C</h3>
                           : <h3>{weatherData.forecast.day.avgtemp_f} {'\u00b0'} F</h3>
                        }
                     </div>

                     <div className='container-bottom'>
                        <span>Daily Min</span>
                        {state.dataType ?
                           <h3>{weatherData.forecast.day?.mintemp_c} {'\u00b0'} C</h3>
                           : <h3>{weatherData.forecast.day.mintemp_f} {'\u00b0'} F</h3>
                        }
                     </div>
                  </div>
               </div>
            </div>

            <div className='bottom'>
               <span>{weatherData.current.condition?.text}</span>
            </div>
         </div>
      </div>
   )
}

export default InfoSection
