function initMap() {
    // Styles a map in night mode.

    const input = document.getElementById("pac-input");

    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 30.095084303212673, lng: -95.99079343452911 },
        zoom: 15,
        minZoom: 10,
        fullscreenControl: false,
        mapTypeControl: false,

        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_BOTTOM,
        },
        streetViewControl: true,
        streetViewControlOptions: {
            position: google.maps.ControlPosition.LEFT_BOTTOM,

        },
        styles: [
            {
                elementType: "geometry",
                stylers: [{ color: "#f5f5f5" }],
            },
            {
                elementType: "labels.icon",
                stylers: [{ visibility: "off" }],
            },
            {
                elementType: "labels.text.fill",
                stylers: [{ color: "#616161" }],
            },
            {
                elementType: "labels.text.stroke",
                stylers: [{ color: "#f5f5f5" }],
            },
            {
                featureType: "administrative.land_parcel",
                elementType: "labels.text.fill",
                stylers: [{ color: "#bdbdbd" }],
            },
            {
                featureType: "poi",
                elementType: "geometry",
                stylers: [{ color: "#eeeeee" }],
            },
            {
                featureType: "poi",
                elementType: "labels.text.fill",
                stylers: [{ color: "#757575" }],
            },
            {
                featureType: "poi.park",
                elementType: "geometry",
                stylers: [{ color: "#e5e5e5" }],
            },
            {
                featureType: "poi.park",
                elementType: "labels.text.fill",
                stylers: [{ color: "#9e9e9e" }],
            },
            {
                featureType: "road",
                elementType: "geometry",
                stylers: [{ color: "#ffffff" }],
            },
            {
                featureType: "road.arterial",
                elementType: "labels.text.fill",
                stylers: [{ color: "#757575" }],
            },
            {
                featureType: "road.highway",
                elementType: "geometry",
                stylers: [{ color: "#dadada" }],
            },
            {
                featureType: "road.highway",
                elementType: "labels.text.fill",
                stylers: [{ color: "#616161" }],
            },
            {
                featureType: "road.local",
                elementType: "labels.text.fill",
                stylers: [{ color: "#9e9e9e" }],
            },
            {
                featureType: "transit.line",
                elementType: "geometry",
                stylers: [{ color: "#e5e5e5" }],
            },
            {
                featureType: "transit.station",
                elementType: "geometry",
                stylers: [{ color: "#eeeeee" }],
            },
            {
                featureType: "water",
                elementType: "geometry",
                stylers: [{ color: "#c9c9c9" }],
            },
            {
                featureType: "water",
                elementType: "labels.text.fill",
                stylers: [{ color: "#9e9e9e" }],
            },
        ],

    })


}
window.initMap = initMap;

