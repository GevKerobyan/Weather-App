import { useCallback, useMemo, useRef, useState } from 'react'
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api'
import './MapSectionStyles.css'
import getWeather from '../../helpers/getWeather'
import userHome from '../../assets/img/Location-user-01.svg'
import getInit from '../../helpers/getInit'

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
    <div className="mapWrapper">
      <button className='homeBtn'
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
        <GoogleMap options={options} zoom={9} className="mapWrapper" mapContainerStyle={{
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
            onClick={(e) => {
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
              <div className='infoWindowContainer'>
                <span className='infoWindowLocation'>{state.location.name}</span>
                {state.dataType ?
                  <span className='infoWindowData'>{state.weatherData.current.temp_c}{'\u00b0'} C</span>
                  : <span className='infoWindowData'>{state.weatherData.current.temp_f}{'\u00b0'} F</span>
                }
              </div>
            </InfoWindow> : null}
        </GoogleMap>
        : <h1>Loading map...</h1>}
    </div>
  )
}

export default MapSection