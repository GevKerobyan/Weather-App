import './SecondPageStyles.css'

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
         <div className='dailyAstroStats'>dailyAstroStats
         <img src={weatherData.forecast.day?.condition.icon}></img>
         </div>
      </div>
   )
}

export default SecondPage

{/* <div className="moon bottomSection">
                  <div className="moonData bottomData">
                     <span>{astroData.moonrise}</span>
                     <span>{astroData.moonset}</span>
                  </div>
                  <div className="moonPic bottomPic"></div>
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
               </div> */}