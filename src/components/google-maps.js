import React from 'react'
import {Map, InfoWindow, Marker} from 'google-maps-react'

export class MapContainer extends Component {
  render() {
    return (
      <Map google={this.props.google}
          style={{width: '100%', height: '100%', position: 'relative'}}
          className={'map'}
          zoom={15}>
        <Marker
          title={'The marker`s title will appear as a tooltip.'}
          name={'SOMA'}
          position={{lat: -36.749711, lng: 174.705476}} />
        <Marker
          name={'Your position'}
          position={{lat: 37.762391, lng: -122.439192}}
          icon={{
            url: "../images/place_marker.png",
            anchor: new google.maps.Point(32,32),
            scaledSize: new google.maps.Size(64,64)
          }} />
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: 'AIzaSyA0odzl9yIvPlw7QnLKt20ekgU2Nijoiyc'
})(MapContainer)