# Vuejs 3.0 + carto2D/3D Seed

This is a basic starter project for a Vuejs 3.0 app (via vue-cli). 
It includes :
- vuejs: 3.0
    - vue-router
    - axios
- cesium: 1.75
- leaflet: 1.7.1
- Openlayers: 6.4.3

## Installation

First download the project with Git:

```
git clone https://github.com/thibaud-c/seed-vuejs3.0-carto2D-3D.git your_project_name
```

Then open the folder in your command line, and install the needed dependencies:

```
cd your_project_name
npm install
```

Finally create a file .env at your project root to provide your Cesium ion key:

<sup>_an example of .env is provided in .env.example_</sup>
```js
VUE_APP_CESIUM_ION_TOKEN=YOUR_CESIUM_ION_KEY
```

## Run

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```