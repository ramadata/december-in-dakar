mapboxgl.accessToken = 'pk.eyJ1IjoicnNvbmtvOTgiLCJhIjoiY2tobzFmNTFqMDFpMzJzcDU1b3JoYXNnciJ9.wvkcR9_KlOdS3n3N_wQbNw';

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

loadMap([-17.467686, 14.716677]);
