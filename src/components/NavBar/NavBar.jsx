import { dispatchTypes } from '../../State/State'
import SearchBar from '../SearchBar/SearchBar'
import { useState } from 'react'
import './navBarStyles.css'

const NavBar = ({ isLoaded, state, dispatch }) => {

   const [tempSearchCity, setTempSearchCity] = useState('')
   const navDateFormat = (input) => {
      const monthArr = [
         'Jan',
         'Feb',
         'Mar',
         'Apr',
         'May',
         'June',
         'July',
         'Aug',
         'Sept',
         'Oct',
         'Nov',
         'Dec',
      ];
      let bub = [];
      let firstBub, secondBub, res, result;
      if (input) {
         bub = input.split(' ')
         firstBub = bub[0]
         secondBub = bub[1]
         res = firstBub.split('-')
         res[1] = monthArr[parseInt(res[1]) - 1]
         result = [res[2], res[1], res[0]].join(' ').concat(` / ${secondBub}`)
         return result
      }
      return ''
   }

   navDateFormat(state.location.localtime)

   return (
      <div className='nav-bar-wrapper'>
         <div className='datatype-wrapper' onClick={() => dispatch({ type: dispatchTypes.CHANGE_SYSTEM })}>
            <span>Data Type</span>
            <span className='datatype-value'>{state.dataType ? 'Metric' : 'Imperial'}</span>
         </div>

         <SearchBar
            isLoaded={isLoaded}
            state={state}
            dispatch={dispatch}
            tempSearchCity={tempSearchCity}
            setTempSearchCity={setTempSearchCity}
         />
         <div className='nav-date'>{navDateFormat(state.location.localtime)}</div>
      </div>
   )
}

export default NavBar
