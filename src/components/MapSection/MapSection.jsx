import './MapSectionStyles.css'
import { useCallback, useMemo, useRef, useState } from 'react'
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api'
import {getInit, getWeather} from '../../helpers'
import userHome from '../../assets/img/Location-user-01.svg'

const MapSection = ({ isLoaded, state, dispatch }) => {

  const center = useMemo(() => ({
    lat: state.location.lat,
    lng: state.location.lon,
  }), [state.location])

  const options = {
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
    clickableIcons: false,
    gestureHandling: 'greedy',
    maxZoom: 12,
    minZoom: 4
  }

  const [infoWindowOpen, setInfoWindowOpen] = useState(false)

  const setClickedCoords = useCallback(e => {
    setInfoWindowOpen(true)
    let place = `${e.latLng.lat()},${e.latLng.lng()}`
    getWeather({ state, dispatch, place })
  }, [])

  const mapRef = useRef();
  const onMapLoad = useCallback(map => {
    mapRef.current = map
  }, [])

  return (
    <div className="map-wrapper">
      <button className='home-btn'
        onClick={() => {
          setInfoWindowOpen(true)
          getInit({ state, dispatch })
        }}>

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
        <GoogleMap options={options} zoom={9} className="map-wrapper" mapContainerStyle={{
          width: '100%',
          height: '100%'
        }}
          onCenterChanged={() => {
            setInfoWindowOpen(true)
          }}
          center={center}
          onClick={setClickedCoords}
          onDblClick={null}
          onLoad={onMapLoad} >
          <Marker
            position={center}
            onClick={() => {
              setInfoWindowOpen(!infoWindowOpen)
            }
            }
          >
          </Marker>
          {infoWindowOpen ?
            <InfoWindow
              options={{ pixelOffset: new window.google.maps.Size(0, -45) }}
              position={center}
              onCloseClick={() => setInfoWindowOpen(false)}>
              <div className='info-window-container'>
                <span className='info-window-location'>{state.location.name}</span>
                {state.dataType ?
                  <span className='info-window-data'>{state.weatherData.current.temp_c}{'\u00b0'} C</span>
                  : <span className='info-window-data'>{state.weatherData.current.temp_f}{'\u00b0'} F</span>
                }
              </div>
            </InfoWindow> : null}
        </GoogleMap>
        : <h1>Loading map...</h1>}
    </div>
  )
}

export default MapSection