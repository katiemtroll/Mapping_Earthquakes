// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.6213, -122.3790], 5);

// Coordinates for each point to be used in the polyline.
let line = [
    [33.9416, -118.4085],
    [37.6213, -122.3790],
    [40.7899, -111.9791],
    [47.4502, -122.3088]
];
// Create a polyline using the line coordinates and make the line yellow.
L.polyline(line, {
    color: "yellow"
}).addTo(map);

// Get data from cities.js
let cityData = cities;

//SKILL DRILL
// Loop through the cities array and create one marker WITH POPUP for each city.
cityData.forEach(function(city) {
    console.log(city)
    L.circleMarker(city.location, {     //change the marker for each city to a circle
        radius: city.population/200000, //with radius = to city's population /200,000 to
                                        //decrease radius so circle markers fit on the map
        color: "orange",                // marker color: orange
        weight: 2                       // marker line weight: 2  (Stroke width in pixels)
    })     
    //put data in pop-up marker                             
    //<header 2> + city from city object + , + state from city object + <end header 2><hr><h3>Population + population from city object.format the population with a thousands separator (,)</h3>
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")  
  .addTo(map);
});

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);