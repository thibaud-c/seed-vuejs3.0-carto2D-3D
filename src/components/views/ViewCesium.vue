<template>
  <div id="cesium-container"></div>
</template>

<script >
import {   
  Cesium3DTileset,
  createWorldTerrain,
  IonResource,
  Ion,
  Viewer,
  Cartesian3,
} from 'cesium';
import "cesium/Build/Cesium/Widgets/widgets.css";


export default {
  name: "CesiumGlobeView",
  data() {
    return{
      center: [6.659361,46.779389],
      defaultheight:1500.,
      viewer:null
    }
  },
  methods: {
    /**
     * Fly to position 
     * 
     * @param {number[]} globecenter position to fly to
     * @param {number} globeheight altitude
     * @param {Viewer} viewer cesium viewer
     */
    flytodirection(globecenter,globeheight,viewer){
      viewer.camera.flyTo({
        destination : Cartesian3.fromDegrees(globecenter[0], globecenter[1], globeheight)
      });
    },
    /**
     * Init Cesium globe
     * 
     * @returns {Viewer} viewer from cesium
     */
    setupCesiumGlobe () {
      let viewer = new Viewer('cesium-container', {
        terrainProvider: new createWorldTerrain()
      });
      let tileset = new Cesium3DTileset({
          url: IonResource.fromAssetId(40866)
      });
      viewer.scene.primitives.add(tileset);
      viewer.zoomTo(tileset);
      return viewer;
  }
  },
  mounted() {
    // add cesium ion token to the app
    Ion.defaultAccessToken = process.env.VUE_APP_CESIUM_ION_TOKEN;
    
    this.viewer = this.setupCesiumGlobe();
    this.flytodirection(this.center,this.defaultheight,this.viewer)
  },
};
</script>

<style scoped>
#cesium-container {
  height: 500px;
}
</style>