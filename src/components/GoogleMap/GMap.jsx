import React from 'react'
import GoogleMapReact from 'google-map-react'
import marker from "../images/place-marker.png"


const defaultProps = {
  center: {
    lat: -36.749711,
    lng: 174.705476,
  },
  zoom: 15,
}

// const AnyReactComponent = ({ text }) => <div>{<img src={marker} alt="maps-marker" />}</div>

const Marker = props => {
  return <div className="MarkerPin"><img src={marker}/></div>
}

const GoogleMap = () => (
  <div style={{ height: '30vh', width: '100%' }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: 'AIzaSyA0odzl9yIvPlw7QnLKt20ekgU2Nijoiyc' }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
    <Marker lat={defaultProps.center.lat} lng={defaultProps.center.lng} />

    </GoogleMapReact>
  </div>
)

export default GoogleMap