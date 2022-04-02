function init() {
    function initMap() {
        var map;
        var myLatLng = new google.maps.LatLng(-34.397, 150.644);
        map = new google.maps.Map(document.getElementById("map"), {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8,
        });
        new google.maps.Marker({
            position: myLatLng,
            map,
            title: "Hello World!",
        });

    }
    initMap();

}

window.addEventListener('load', init)
