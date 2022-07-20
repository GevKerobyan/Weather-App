import { useEffect } from 'react';
import './SecondPageStyles.css'

function SecondPage({ state, dispatch }) {
   const { location, weatherData } = state;



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