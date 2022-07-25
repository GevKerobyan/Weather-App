import './SecondPageStyles.css'
import Sun from '../../assets/AstroIcons/Sun.png'
import Moon from '../../assets/AstroIcons/Moon.png'
import Rain from '../../assets/AstroIcons/Rain.png'
import Snow from '../../assets/AstroIcons/Snow.png'


function SecondPage({ state, dispatch }) {
   const { location, weatherData } = state;

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
      <div className='secondPage'>
         <div className='dailyTempGraph'>
            <div className="hourlyInfoContent">
               {weatherData.forecast.hour?.map((item, index) => {
                  return (
                     <div className='singleHourData' key={index}>
                        <div className='singleHourTemp'>
                           {state.dataType ? item.temp_c : item.temp_f}
                        </div>
                        <div className='singleHourBar'>
                           <div className='singleHourActualBar'
                              style={{
                                 position: 'absolute',
                                 bottom: '0',
                                 left: '0',
                                 width: '6px',
                                 // backgroundColor: `blue`,
                                 background: 'linear-gradient( blue, lightblue)',
                                 height: `${item.temp_c * 2}%`
                              }}>
                           </div>
                        </div>
                        <div className='singleHourTime'>{`${index}:0`}</div>
                     </div>
                  )
               })}
            </div>
         </div>

         <div className='dailyAstroStats'>

            <div className="moonData astroData">
               <div className="moonPic astroPic">
                  <img src={Moon} alt='moon'></img>
               </div>
               <div className='riseAndSet'>
                  <span>rise</span>
                  <span>set</span>
               </div>
               <div className='riseAndSet'>
                  <span>{astroData.moonrise}</span>
                  <span>{astroData.moonset}</span>
               </div>
            </div>
            
            <div className="sunData astroData">
               <div className="sunPic astroPic">
                  <img src={Sun} alt='sun'></img>
               </div>
               <div className='riseAndSet'>
                  <span>rise</span>
                  <span>set</span>
               </div>
               <div className='riseAndSet'>
                  <span>{astroData.sunrise}</span>
                  <span>{astroData.sunset}</span>
               </div>
            </div>
          
            <div className="rainData astroData">
               <div className="rainPic astroPic">
                  <img src={Rain} alt='rain'></img>
               </div>
               <div>chance</div>
               <span>{weatherData.forecast.day?.daily_chance_of_rain}<span>%</span></span>
            </div>
            
            <div className="snowData astroData">
               <div className="snowPic astroPic">
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