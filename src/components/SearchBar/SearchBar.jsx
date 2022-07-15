import axios from "axios";
import { useState, useEffect, useReducer } from "react";
import { svgs } from "../../assets/img/svgs";
import { INITIAL_LOAD, SET_SEARCH_LOCATION } from "../../context/dispatchTypes";
import State from "../../context/State";
import stateReducer from "../../context/stateReducer";

function SearchBar() {

   const [state, dispatch] = useReducer(stateReducer, State);

   const [tempSearchCity, setTempSearchCity] = useState('')

// useEffect(()=> {
//    console.log('consoling: state in search :::', state )
// }, [state])

   // GET INITIAL LOCATION

   useEffect(() => {
      axios.get('https://ipapi.co/json').then((res) => {
         console.log('res ::: ', res)
         dispatch({
            type: INITIAL_LOAD, payload: {
               city: res.data.city,
               lat: res.data.latitude,
               lng: res.data.longitude
            }
         })
      });
   }, []);

   const handleSearchTrigger = e => {
      if (e.key === 'Enter') {
         dispatch({ type: SET_SEARCH_LOCATION, payload: tempSearchCity })
      }
   }

   return (
      <div className='search-input-wrapper'>
         <div className='search-input'>
            <input
               type='text'

               placeholder={tempSearchCity || 'please choose a city'}
               onChange={(e) => setTempSearchCity(e.target.value)}
               onKeyPress={e => handleSearchTrigger(e)}
            />
            {/* <div className='search-btn' onClick={(e) => handleLocationSet(e)}>
               {svgs.arrowRight}
            </div> */}
         </div>
      </div>
   )
}

export default SearchBar