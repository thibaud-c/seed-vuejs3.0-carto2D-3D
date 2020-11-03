<template>
  <div id="ol-container" class="map"></div>
</template>

<script>
import 'ol/ol.css';
import Map from 'ol/Map';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import * as olProj from 'ol/proj';

export default {
  data() {
    return{
      center: [6.659361,46.779389],
      olmap:null,
      zoom: 17
    }
  },
  computed:{
    /**
     * Transform coordinate from EPSG:4326 to EPSG:3857
     * 
     * @use center in EPSG:4326
     * @return center in EPSG:3857
     */
    center3857(){
      return olProj.transform(this.center, 'EPSG:4326', 'EPSG:3857');
    }
  },
  methods: {
    /**
     * Init Openlayers map
     * 
     * @param {number[]} mapcenter center of the map in EPSG:3857
     * @param {number} mapzoom zommlevel
     * @returns {Map} initmap new openlayers map
     */
    setupOpenlayersMap (mapcenter,mapzoom) {
      return new Map({
        target: 'ol-container',
        layers: [
          new TileLayer({
            source: new OSM(),
          }) ],
        view: new View({
          center: mapcenter,
          zoom: mapzoom
        })
      })
    }
  },
  mounted() {
    this.olmap = this.setupOpenlayersMap(this.center3857,this.zoom);
  }

}
</script>

<style scoped>
#ol-container {
  height: 500px;
}
</style>