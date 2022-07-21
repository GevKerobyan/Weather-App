import './SearchBarStyles.css'
import { svgs } from "../../assets/img/svgs";
import getWeather from "../../helpers/getWeather";

function SearchBar({ state, dispatch, tempSearchCity, setTempSearchCity }) {

   // GET CURRENT 

   const callCurrent = () => {
      getWeather({ state, dispatch, place: tempSearchCity })
   }

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