mapboxgl.accessToken = 'pk.eyJ1IjoicnNvbmtvOTgiLCJhIjoiY2tobzFmNTFqMDFpMzJzcDU1b3JoYXNnciJ9.wvkcR9_KlOdS3n3N_wQbNw';

navigator.geolocation.getCurrentPosition(existingLocation,
    errorLocation, {
        enableHighAccuracy : true
    });

function existingLocation(position) {
    loadMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
    loadMap([17.4988, 14.7228])
}

function loadMap(center) {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 12
    })

    const nav = new mapboxgl.NavigationControl()
    map.addControl(nav)

    var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken
    })

    map.addControl(directions, 'top-left')
}