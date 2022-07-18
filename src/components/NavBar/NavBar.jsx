import { useState } from "react"
import { dispatchTypes } from "../../context/State"
import SearchBar from "../SearchBar/SearchBar"
import './navBarStyles.css'


// dispatch({ type: dispatchTypes.CHANGE_SYSTEM })

const NavBar = ({ state, dispatch }) => {

   const [menuFlag, setMenuFlag] = useState(false)

   return (
      <div
         style={{
            position: 'fixed',
            zIndex: '9',
            display: 'flex',
            width: '25%',
            marginLeft: '50%',
            transform: 'translateX(-25%)',
            paddingRight: '5%',
            height: '75px',
            justifyContent: "space-between",
            alignItems: 'center',
            color: 'white'
         }}>
         <SearchBar state={state} dispatch={dispatch} />
         <div className="menu" onClick={() =>setMenuFlag(!menuFlag)}>Options</div>
         
         {menuFlag && <div className="openMenu">

            <span>Data type</span>
            <span>Get current</span>
            <span>Get forecast</span>
            

         </div>}
      </div>
   )
}

export default NavBar