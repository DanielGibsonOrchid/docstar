import React, {Component} from 'react'
import GoogleMapReact from 'google-map-react'
import marker from "../../images/place-marker.png"


// const AnyReactComponent = ({ text }) => <div>{<img src={marker} alt="maps-marker" />}</div>

const Marker = props => {
  return <div className="MarkerPin"><img src={marker}/></div>
}

class GoogleMap extends Component {
  constructor (props) {
    super(props);

    this.props = props;
  }

  state = {
    center: {
      lat: -36.749711,
      lng: 174.705476,
    },
    zoom: 15,
  }

  changeCenter = () => {
    this.setState({ center: { lat: 11.1311, lng: 125.01299 } })
  }

render () {
  const { center, zoom } = this.state;

  return (
    <div style={{ height: '30vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyA0odzl9yIvPlw7QnLKt20ekgU2Nijoiyc' }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
      <Marker lat={center.lat} lng={center.lng} />

      </GoogleMapReact>

      <button type="button" onClick={this.changeCenter}>Change Center</button>
    </div>
  );
  } 
}

export default GoogleMap