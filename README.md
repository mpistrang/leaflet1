# Leaflet1

Leaflet tuturial loading geojson points from a file.

Uses:

- Mapbox to get the base layers
- Leaflet to draw the map and features
- Geojson to represent the data

# Github Pages

https://mpistrang.github.io/leaflet1/

Static site served out of the /docs directory

# Run Locally

Use docker to avoid serving off the file system

`docker run -it --rm -d -p 8084:80 --name leaflet1 -v $PWD/docs:/usr/share/nginx/html -v $PWD/nginx.conf:/etc/nginx/conf.d/default.conf nginx`