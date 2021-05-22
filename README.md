# Run Locally

`docker run -it --rm -d -p 8084:80 --name leaflet1 -v $PWD/site-content:/usr/share/nginx/html -v $PWD/nginx.conf:/etc/nginx/conf.d/default.conf nginx`