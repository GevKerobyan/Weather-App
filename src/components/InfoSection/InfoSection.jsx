import './InfoSectionStyles.css'
import rainPic from '../../assets/weatherIcons/day/185.png'
const InfoSection = ({ state, dispatch }) => {

   const { location, weatherData } = state;
   const tempBarColorSetter = (input) => {
      return input * 4 / 100
   }

   const checkAstro = (input) => {
      if (input?.split(' ')[0] !== 'No') return input
      return 'N/A'
   }

   const astroData = {
      moonrise: checkAstro(weatherData.forecast.astro?.moonrise),
      moonset: checkAstro(weatherData.forecast.astro?.moonset),
      sunrise: checkAstro(weatherData.forecast.astro?.sunrise),
      sunset: checkAstro(weatherData.forecast.astro?.sunset),
   }

   return (
      <div>
         <div className="infoContainer">
            <div className="top">
               <div className="location">
                  <h1>{location.name}</h1>
                  <img src={weatherData.current.condition?.icon}></img>
               </div>
               <div className="weatherInfo">
                  <div className="temperature container">
                     <span>Temperature</span>
                     {state.dataType ?
                        <h2>{weatherData.current.temp_c}{'\u00b0'} C</h2>
                        : <h2>{weatherData.current.temp_f}{'\u00b0'} F</h2>
                     }
                  </div>
                  <div className="visibility container">
                     <span>Visibility</span>
                     {state.dataType ?
                        <h3>{weatherData.current.vis_km} <span style={{ fontSize: '20px' }}>km</span></h3>
                        : <h3>{weatherData.current.vis_miles}<span style={{ fontSize: '20px' }}>ml</span></h3>
                     }
                  </div>
                  <div className='containerBottomWrapper'>
                     <div className="dailyMax containerBottom">
                        <span>Daily Max</span>
                        {state.dataType ?
                           <h3>{weatherData.forecast.day?.maxtemp_c} {'\u00b0'} C</h3>
                           : <h3>{weatherData.forecast.day.maxtemp_f} {'\u00b0'} F</h3>
                        }
                     </div>

                     <div className="dailyAvg containerBottom">
                        <span>Daily Avg</span>
                        {state.dataType ?
                           <h3>{weatherData.forecast.day?.avgtemp_c} {'\u00b0'} C</h3>
                           : <h3>{weatherData.forecast.day.avgtemp_f} {'\u00b0'} F</h3>
                        }
                     </div>

                     <div className="dailyMin containerBottom">
                        <span>Daily Min</span>
                        {state.dataType ?
                           <h3>{weatherData.forecast.day?.mintemp_c} {'\u00b0'} C</h3>
                           : <h3>{weatherData.forecast.day.mintemp_f} {'\u00b0'} F</h3>
                        }
                     </div>
                  </div>

               </div>
               
            </div>

            <div className="bottom">
               <div className="moon bottomSection">
                  <div className="moonData bottomData">
                     <span>{astroData.moonrise}</span>
                     <span>{astroData.moonset}</span>
                  </div>
                  <div className="moonPic bottomPic">
                  </div>
               </div>
               <div className="sun bottomSection">
                  <div className="sunData bottomData">
                     <span>{astroData.sunrise}</span>
                     <span>{astroData.sunset}</span>
                  </div>
                  <div className="sunPic bottomPic"></div>
               </div>
               <div className="rain bottomSection">
                  <div className="rainData bottomData">
                  <span>{weatherData.forecast.day?.daily_chance_of_rain}<span>%</span></span>
                  </div>
                  <div className="rainPic bottomPic">
                     <img src={rainPic} alt='rain'></img>
                  </div>
               </div>
               <div className="snow bottomSection">
                  <div className="snowData bottomData">
                  <span>{weatherData.forecast.day?.daily_chance_of_snow}<span>%</span></span>

                  </div>
                  <div className="snowPic bottomPic"></div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default InfoSection