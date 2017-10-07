/*
* Add a map marker from the each feature
* and return back as an object
*/

function addMapMarker(googleMap, feature) {

    // Set latitude and longitude
    let latLng = new google.maps.LatLng(
        feature.geometry.coordinates[1],
        feature.geometry.coordinates[0]
    )

    // Convert Time. 
    let earthquakeTime = new Date(feature.properties.time).toLocaleString(); 

    // Create info window with content
    let infoWindow = new google.maps.InfoWindow({
        content: `<div class="infoWindow">
            <h4>${feature.properties.place}</h4>
            <p>Recorded: ${earthquakeTime}</p>
            <p>Magitude: ${feature.properties.mag}</p>
        </div>`
    })

    // Create marker from map and latLng
    let marker = new google.maps.Marker({
        position: latLng,
        map: googleMap,
    });

    // Add listener for click event to show info window
    marker.addListener('click', function() { 
        infoWindow.open(googleMap, marker);
    });

    // return marker to main script;
    return marker;
}

export default addMapMarker;
