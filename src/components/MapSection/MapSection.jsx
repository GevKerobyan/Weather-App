import { GoogleMap, InfoWindow, Marker, useLoadScript } from '@react-google-maps/api'
import { useEffect, useRef, useState } from 'react'
import './MapSectionStyles.css'

const libraries = ['places']
const mapContainerStyle = {
  width: '100%',
  height: '100%'
}


const MapSection = ({ state, dispatch }) => {
  const center = {
    lat: state.location.lat,
    lng: state.location.lon,
  }
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCFppXDLIH45Wt4_1ZD4gRJPxQS5_pSTx0',
    libraries,
  })

  // if (loadError) return 'Error loading map'
  // if (isLoaded) return 'Loading map'

  return (
    <div className="mapWrapper">
      {isLoaded ?
        <GoogleMap className="mapWrapper" mapContainerStyle={mapContainerStyle} zoom={10} center={center} /> : <h1>Loading map...</h1>}
    </div>
  )
}

export default MapSection