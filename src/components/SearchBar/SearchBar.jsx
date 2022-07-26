import './SearchBarStyles.css'
import { svgs } from "../../assets/svgs";
import getWeather from "../../helpers/getWeather";
// import { Autocomplete } from '@react-google-maps/api';
import PlacesAutocomplete, {
   geocodeByAddress,
   geocodeByPlaceId,
   getLatLng,
} from 'react-places-autocomplete';

function SearchBar({ isLoaded, state, dispatch, tempSearchCity, setTempSearchCity }) {

   // GET CURRENT 
   const callCurrent = e => {
      getWeather({ state, dispatch, place: e })
      setTempSearchCity('')
   }

   return (
      <div className='search-input'>
         <div className='search-btn' value={tempSearchCity} onClick={callCurrent}>
            {svgs.arrowRight}
         </div>
         {isLoaded ?
            <PlacesAutocomplete
               value={tempSearchCity}
               onChange={setTempSearchCity}
               onSelect={e => callCurrent(e)}
            >
               {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                  <div className='inputContainer'>
                     <input className='input'
                        {...getInputProps({
                           placeholder: `${tempSearchCity || 'please choose a city'}`,
                        })}
                     />
                     <div className='searchDropDownContainer'>
                        {loading ? <div>...loading</div> : null}

                        {suggestions.map((suggestion, index) => {
                           const style = { backgroundColor: suggestion.active ? 'rgba(32,73,105,1)' : 'rgba(218,218,218,1)', color: suggestion.active ? 'rgba(218,218,218,1)' : 'rgba(32,73,105,1)', width: '100%', cursor: 'pointer', padding: '6px 10px' }
                           return <div key={index} className='searchSuggestionContainer'{...getSuggestionItemProps(suggestion, { style })}>{suggestion.description}</div>
                        })}
                     </div>
                  </div>
               )}
            </PlacesAutocomplete>
            : <input
               type='text'
               value={tempSearchCity}
               placeholder={tempSearchCity || 'please choose a city'}
               onChange={e => setTempSearchCity(e.target.value)}
               onKeyPress={e => (e.key === 'Enter' && tempSearchCity) && callCurrent()}
            />
         }
      </div>
   )
}

export default SearchBar