<template>
  <div id="l-container"></div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from 'leaflet';

export default {
  name: "LeafletMapView",
  data() {
    return {
      center: [46.779389, 6.659361],
      lmap:null,
      zoom: 17
    }
  },
  methods: {
    /**
     * Init Leaflet map
     * 
     * @param {number[]} mapcenter center of the map in EPSG:3857
     * @param {number} mapzoom zommlevel
     * @returns {Map} initmap new leaflet map
     */
    setupLeafletMap (mapcenter,mapzoom) {
      let initmap = L.map("l-container").setView(mapcenter, mapzoom);
      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        maxZoom: 20,
        attribution: '&copy; Openstreetmap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(initmap);
      return initmap
    }
  },
  mounted() {
    this.lmap= this.setupLeafletMap(this.center,this.zoom);
  }
};
</script>

<style scoped>
#l-container {
  height: 500px;
}
</style>