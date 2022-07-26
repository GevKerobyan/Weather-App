import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api'
import getWeather from '../../helpers/getWeather'
import './MapSectionStyles.css'
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

  const [infoWindowOpen, setInfoWindowOpen] = useState(null)

  const setClickedCoords = useCallback(e => {
    setInfoWindowOpen(false)
    let place = `${e.latLng.lat().toFixed(2)},${e.latLng.lng().toFixed(2)}`
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
          setInfoWindowOpen(false)
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
            setInfoWindowOpen(false)
          }}
          center={center}
          onDblClick={setClickedCoords}
          onLoad={onMapLoad} >
          <Marker
            position={center}
            onClick={(e) => {
              console.log('consoling: e.target :::', e)
              setInfoWindowOpen(!infoWindowOpen)
            }
            }
          >
            {infoWindowOpen ?
              <InfoWindow
                position={center}
                onCloseClick={() => setInfoWindowOpen(!infoWindowOpen)}>
                <div className='infoWindowContainer'>
                  <h3 className='infoWindowLocation'>{state.location.name}</h3>
                  {state.dataType ?
                    <h2>{state.weatherData.current.temp_c}{'\u00b0'} C</h2>
                    : <h2>{state.weatherData.current.temp_f}{'\u00b0'} F</h2>
                  }
                </div>
              </InfoWindow> : null}
          </Marker>
        </GoogleMap>
        : <h1>Loading map...</h1>}
    </div>
  )
}

export default MapSection