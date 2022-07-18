import axios from "axios";
import { useState, useEffect, useReducer, useContext } from "react";
import { svgs } from "../../assets/img/svgs";
import { dispatchTypes, InitialState, reducer } from "../../context/State";
import getCurrent from "../../helpers/getCurrent";

function SearchBar({ state, dispatch }) {


   const [tempSearchCity, setTempSearchCity] = useState('')

   // GET CURRENT 

   const callCurrent = () => {
      getCurrent({ state, dispatch, place: tempSearchCity })
   }

   // useEffect(() => {
   //    console.log('consoling: tempSearchCity :::', tempSearchCity)
   // }, [tempSearchCity])

   return (
      <div className='search-input-wrapper'>
         <div className='search-input'>
            <input
               type='text'
               value={tempSearchCity}
               placeholder={tempSearchCity || 'please choose a city'}
               onChange={e => setTempSearchCity(e.target.value)}
               onKeyPress={e => (e.key === 'Enter' && tempSearchCity) && callCurrent()}
            />
            <div className='search-btn' value={tempSearchCity} onClick={callCurrent}>
               {svgs.arrowRight}
            </div>
         </div>
      </div>
   )
}

export default SearchBar