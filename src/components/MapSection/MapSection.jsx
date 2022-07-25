import { useCallback, useRef } from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
import getWeather from '../../helpers/getWeather'
import './MapSectionStyles.css'
import userHome from '../../assets/img/Location-user-01.svg'
import getInit from '../../helpers/getInit'

const MapSection = ({ isLoaded, state, dispatch }) => {

  const center = {
    lat: state.location.lat,
    lng: state.location.lon,
  }

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
      <button
        style={{
          position: 'absolute',
          zIndex: '10000',
          right: '50px',
          top: '25px',
          borderRadius: '100%',
          border: 'none',
          backgroundColor: 'rgba(100,100,100,0.6)',
          padding: '10px',
          boxSizing: 'border-box',
          cursor: 'pointer',
        }}
        onClick={()=>getInit({ state, dispatch })}>
        <img
          style={{
            width: '30px',
            height: '30px',
            borderRadius: '20px',
          }}
          src={userHome}
          alt='home image'
        />
      </button>
      {isLoaded ?
        <GoogleMap options={{ mapTypeControl: false, streetViewControl: false, fullscreenControl: false }} className="mapWrapper" mapContainerStyle={{
          width: '100%',
          height: '100%'
        }} zoom={10} center={center} onClick={setClickedCoords} onLoad={onMapLoad} /> : <h1>Loading map...</h1>}
    </div>
  )
}

export default MapSection