require('js-marker-clusterer');
import axios from 'axios';
import addMapMaker from './addMapMarker';

const earthquakeURL = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson';
const clusterImagePath = 'https://cdn.rawgit.com/googlemaps/js-marker-clusterer/gh-pages/images/m';

function createMap() {
    let earthQuakeData = [];
    
    // google map options
    let mapOptions = {
        center: new google.maps.LatLng(0, 0),
        zoom: 2, 
        minZoom: 1
    };

    // cluster options 
    let cluserOptions = {
        imagePath: clusterImagePath
    };

    // create map
    let googleMap = new google.maps.Map(
        document.getElementById('map'), mapOptions
    );

    // load earth quake data
    axios.get(earthquakeURL).then(function (response) {
        let markers = [];
        
        // add each marker to array.
        response.data.features.forEach(function (feature) {
            markers.push(addMapMaker(googleMap, feature));
        });

        let markerCluster = new MarkerClusterer(googleMap, markers, cluserOptions);  
    });   
}

export default createMap;
