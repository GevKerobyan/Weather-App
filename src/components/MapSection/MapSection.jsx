
import { useReducer } from "react";
import { InitialState, reducer } from "../../context/State";



// lat: state.currentCity?.lat, lng: state.currentCity?.lng



const MapSection = ({state, dispatch}) => {

  return (
    <div className="mapContainer"> {state.currentCity?.name}
     </div>
  )
}

export default MapSection