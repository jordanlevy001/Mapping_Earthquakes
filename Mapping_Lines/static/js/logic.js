// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center at the San Francisco airport
let map = L.map('mapid').setView([30.1975, -97.6664], 5);

//  Add a marker to the map for Los Angeles, California.
// let marker = L.marker([34.0522, -118.2437]).addTo(map);

// Add a circle to the map for Los Angeles, California using circle()
// L.circle([34.0522, -118.2437], {
//    radius: 100,
//    color: 'black',
//   fillColor: '#ffd33c',
//    fillOpacity: 0.4
// }).addTo(map);

// Add a circle to the map for Los Angeles, California using cirlceMarker()
// L.circleMarker([34.0522, -118.2437], {
 //   radius: 300,
 //   color: "black",
  //  fillColor: '#ffffa1'
// }).addTo(map);

// Coordinate for each point to be used in the line
let line = [
    [37.6213, -122.3790],
    [30.1975, -97.6664],
    [43.6777, -79.6248],
    [40.6413, -73.7781]
];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    color: "blue",
    fillRule: "evenodd",
    fillOpacity: 0.5,
    weight: 4
}).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
