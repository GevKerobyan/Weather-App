
import { GoogleMap, InfoWindow, Marker, useLoadScript } from '@react-google-maps/api'

import { useCallback, useRef } from 'react'
import getWeather from '../../helpers/getWeather'
import './MapSectionStyles.css'

const mapContainerStyle = {
  width: '100%',
  height: '100%'
}


const MapSection = ({ isLoaded, loadError, state, dispatch }) => {
  const center = {
    lat: state.location.lat,
    lng: state.location.lon,
  }
  // const { isLoaded, loadError } = useLoadScript({
  //   googleMapsApiKey: 'AIzaSyCFppXDLIH45Wt4_1ZD4gRJPxQS5_pSTx0',
  //   libraries,
  // })
  // 'Lat :: ', e.latLng.lat().toFixed(2), 'Lng :: ', e.latLng.lng().toFixed(2)

  const setClickedCoords = useCallback(e => {
    let place = `${e.latLng.lat().toFixed(2)},${e.latLng.lng().toFixed(2)}`
    console.log(place)
    getWeather({ state, dispatch, place })
  }, [])
  
const mapRef = useRef();
const onMapLoad = useCallback(map => {
  mapRef.current = map
}, []) 

  return (
    <div className="mapWrapper">
      {isLoaded ?
        <GoogleMap className="mapWrapper" mapContainerStyle={mapContainerStyle} zoom={10} center={center} onClick={setClickedCoords} onLoad={onMapLoad} /> : <h1>Loading map...</h1>}
    </div>
  )
}

export default MapSection