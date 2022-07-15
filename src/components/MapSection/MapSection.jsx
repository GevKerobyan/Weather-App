import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps"
import State from "../../context/State";
import { useReducer } from "react";
import stateReducer from "../../context/stateReducer";



// lat: state.currentCity?.lat, lng: state.currentCity?.lng

const WrappedWeatheMap = withScriptjs(withGoogleMap(({ state }) => 
  <GoogleMap defaultZoom={10} defaultCenter={{ lat: 45, lng: -70 }} />
))


const MapSection = () => {
  const [state, dispatch] = useReducer(stateReducer, State);

  return (
    <div className="mapContainer">
      {<WrappedWeatheMap
        googleMapURL='https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyABn4pSIm5TQX-hX3swzO-TY3kKynlRZso'
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
      }</div>
  )
}

export default MapSection