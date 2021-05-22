// Set up the map
const map = L.map("map", { center: [30.0, 0.0], zoom: 3 });

/*
Add the base layer from mapbox to the map
*/
L.tileLayer(
  // default public token
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWljaGFlbHBpc3RyYW5nIiwiYSI6ImNrb3ozOWV5NTBncXEydmxxdmc5dWhlNGEifQ.ZN7YsaG1SRwuaZ_GH00Zvg",
  {
    maxZoom: 18,
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
      'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: "mapbox/light-v9",
    tileSize: 512,
    zoomOffset: -1,
  }
).addTo(map);

/*
Set up the popup for each feature based onthe geojson propeties
*/
function onEachFeature(feature, layer) {
  if (feature.properties && feature.properties.popupContent) {
    const popupContent = feature.properties.popupContent;
    layer.bindPopup(popupContent);
  }
}

// shared syle for each point
const pointsStyle = {
  radius: 5,
  fillColor: "#ff7800",
  color: "#000",
  weight: 1,
  opacity: 1,
  fillOpacity: 0.8,
};

/*
Load the geojson from the file and add it to the map
*/
$.getJSON("points.geojson", function (data) {
  const geojsonLayer = L.geoJSON(data, {
    onEachFeature: onEachFeature,
    pointToLayer: function (feature, latlng) {
      return L.circleMarker(latlng, pointsStyle);
    },
  });
  geojsonLayer.addTo(map);
});