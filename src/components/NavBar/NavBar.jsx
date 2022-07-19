import { useState } from "react"
import { fixDate, getWeather } from "../../helpers"
import { dispatchTypes } from "../../State/State"
import SearchBar from "../SearchBar/SearchBar"
import './navBarStyles.css'


// dispatch({ type: dispatchTypes.CHANGE_SYSTEM })

const NavBar = ({ state, dispatch }) => {

   const [tempSearchCity, setTempSearchCity] = useState('')
   const [menuFlag, setMenuFlag] = useState(false)
   const [dayFlag, setDayFlag] = useState(false)

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
      let bub=[];
      let firstBub, secondBub, res, result;
      if(input) {
         bub = input.split(' ')
         secondBub=bub[1]
         firstBub=bub[0]
         res = firstBub.split('-')
         res[1]=monthArr[parseInt(res[1])-1]
         result = [res[2], res[1], res[0]].join(' ').concat(` - ${secondBub}`)
         return result
      }
      return ''
   
   }

   navDateFormat(state.location.localtime)

   return (
      <div
         style={{
            position: 'fixed',
            zIndex: '9',
            display: 'flex',
            width: '100%',
            backgroundColor: 'linear-gradient(red, blue)',
            // marginLeft: '6rem',
            // paddingRight: '5%',
            padding: '55px',
            height: '75px',
            justifyContent: "center",
            alignItems: 'center',
            gap:'150px',
            color: 'white'
         }}>
         <div className="dataTypeWrapper" onClick={() =>dispatch({type: dispatchTypes.CHANGE_SYSTEM})}>
            <span>Data Type</span>
            <span>{state.dataType ? 'Metric' : 'Imperial'}</span>
         </div>
         
         <SearchBar state={state} dispatch={dispatch} tempSearchCity={tempSearchCity} setTempSearchCity={setTempSearchCity} />
         <div className="navDate">{navDateFormat(state.location.localtime)}</div>
      </div>
   )
}

export default NavBar