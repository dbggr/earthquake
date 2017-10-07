## EarthQuake Live Feed
Concept to get live data from [earthquake.usgs.gov](https://earthquake.usgs.gov)

Utilizing data from https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson_detail.php

### Demo 
https://dbggr.github.io/earthquake/

### Things to note
* Does not use jQuery
* Using [Axios](https://github.com/axios/axios) for http request
* Using [Bulma](http://bulma.io/) for design
* Using [Webpack](https://webpack.js.org/) and plugins for building js and sass files

### Deployment Script
To compile and run this script you will need node & npm installed. 

#### Manual Instructions
    git clone https://github.com/dbggr/earthquake.git
    npm install 
    npm run webpack
