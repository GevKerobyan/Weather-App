import './SecondPageStyles.css'
import { Moon, Sun, Rain, Snow } from '../../assets/AstroIcons'

function SecondPage({ state }) {
   const { weatherData } = state;

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
      <div className='secondpage'>
         <div className='daily-temp-graph'>
            <div className='hourly-info-content'>
               {weatherData.forecast.hour?.map((item, index) => {
                  return (
                     <div className='single-hour-data' key={index}>
                        <div className='single-hour-temp'>
                           {state.dataType ? item.temp_c : item.temp_f}
                        </div>
                        <div className='single-hour-bar'>
                           <div
                              style={{
                                 position: 'absolute',
                                 bottom: '0',
                                 left: '0',
                                 width: '6px',
                                 background: 'linear-gradient( blue, lightblue)',
                                 height: `${item.temp_c * 2}%`
                              }}>
                           </div>
                        </div>
                        <div className='single-hour-time'>{`${index}:0`}</div>
                     </div>
                  )
               })}
            </div>
         </div>

         <div className='daily-astro-stats'>

            <div className='astro-data'>
               <div className='astro-pic'>
                  <img src={Moon} alt='moon'></img>
               </div>
               <div className='rise-and-set'>
                  <span>rise</span>
                  <span>set</span>
               </div>
               <div className='rise-and-set'>
                  <span>{astroData.moonrise}</span>
                  <span>{astroData.moonset}</span>
               </div>
            </div>
            
            <div className='astro-data'>
               <div className='astro-pic'>
                  <img src={Sun} alt='sun'></img>
               </div>
               <div className='rise-and-set'>
                  <span>rise</span>
                  <span>set</span>
               </div>
               <div className='rise-and-set'>
                  <span>{astroData.sunrise}</span>
                  <span>{astroData.sunset}</span>
               </div>
            </div>
          
            <div className='astro-data'>
               <div className='astro-pic'>
                  <img src={Rain} alt='rain'></img>
               </div>
               <div>chance</div>
               <span>{weatherData.forecast.day?.daily_chance_of_rain}<span>%</span></span>
            </div>
            
            <div className='astro-data'>
               <div className='astro-pic'>
                  <img src={Snow} alt='snow'></img>
               </div>
               <div>chance</div>
               <span>{weatherData.forecast.day?.daily_chance_of_snow}<span>%</span></span>
            </div>
         </div>
      </div>
   )
}

export default SecondPage
