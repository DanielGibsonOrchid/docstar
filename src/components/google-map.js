import { withPrefix } from "gatsby"
import React from "react"
// import PropTypes from "prop-types"

const GoogleMap = () => (
  <div>
    {/* <script>
     		function initMap() {
     		var myLatLng = {lat: -37.817214, lng: 144.955925};
	        var map = new google.maps.Map(document.getElementById('gmap'), {
	          center: myLatLng,
	          zoom: 17,
	          styles: [
	          	{ "elementType": "geometry", "stylers": [ { "color": "#ebe3cd" } ] }, 
	          	{ "elementType": "labels.text.fill", "stylers": [ { "color": "#523735" } ] }, 
	          	{ "elementType": "labels.text.stroke", "stylers": [ { "color": "#f5f1e6" } ] } 
	          ]
	        });
			var image = 'images/place-marker.png';
  			var beachMarker = new google.maps.Marker({
   				position: myLatLng,
    			map: map,
    			icon: image,
    			title: 'Hello World!'
  			});
			marker.setMap(map);
	      }
	    </script> */}


      {/* <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC3VridlI2w6LmX_55OQQ4airseVZo-uVI&callback=initMap" async defer></script> */}

      <script src={withPrefix('https://maps.googleapis.com/maps/api/js?key=AIzaSyC3VridlI2w6LmX_55OQQ4airseVZo-uVI&callback=initMap')} type="text/javascript" async defer />


  </div>
)

export default GoogleMap
