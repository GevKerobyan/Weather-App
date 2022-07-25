import './SearchBarStyles.css'
import { svgs } from "../../assets/svgs";
import getWeather from "../../helpers/getWeather";
import { Autocomplete } from '@react-google-maps/api';

function SearchBar({ isLoaded, state, dispatch, tempSearchCity, setTempSearchCity }) {

   // GET CURRENT 
   const callCurrent = () => {
      getWeather({ state, dispatch, place: tempSearchCity })
      setTempSearchCity('')
   }

   return (
      <div className='search-input-wrapper'>
         <div className='search-input'>
            {isLoaded ?
               <Autocomplete>
                  <input
                     type='text'
                     value={tempSearchCity}
                     placeholder={tempSearchCity || 'please choose a city'}
                     onChange={e => setTempSearchCity(e.target.value)}
                     onKeyPress={e => (e.key === 'Enter' && tempSearchCity) && callCurrent()}
                  />
               </Autocomplete>
               : <input
                  type='text'
                  value={tempSearchCity}
                  placeholder={tempSearchCity || 'please choose a city'}
                  onChange={e => setTempSearchCity(e.target.value)}
                  onKeyPress={e => (e.key === 'Enter' && tempSearchCity) && callCurrent()}
               />
            }
            <div className='search-btn' value={tempSearchCity} onClick={callCurrent}>
               {svgs.arrowRight}
            </div>
         </div>
      </div>
   )
}

export default SearchBar