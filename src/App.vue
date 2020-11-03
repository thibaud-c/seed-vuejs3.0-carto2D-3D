<template>
  <img id="vue-icon" src="./assets/logo.png"/>
  <!-- Bulma: menu tabs -->
  <div class="tabs is-centered">
    <ul>
      <li v-for="menu in menulist" :key="menu.name" :class="{ 'is-active': currentPage === menu.name }">
        <!-- use span to use @click on router without page refresh-->
        <span @click="updateCurentPage(menu.name)">
          <router-link :to="menu.route"> {{menu.name}} </router-link>
        </span>
      </li>
    </ul>
  </div>
  <!-- end Bulma: menu tabs -->
  <router-view />
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      currentPage: "Hello",
      menulist:[
        { 
          name:"Hello",
          route:"/"
        },
        { 
          name:"Axios",
          route:"/axios"
        },
        { 
          name:"2d_openlayers",
          route:"/openlayers"
        },
        { 
          name:"2d_leaflet",
          route:"/leaflet"
        },
        { 
          name:"3d_cesium",
          route:"/cesium"
        }
      ] 
    }
  },
  methods: {
    /**
     * Update the curent router page
     * 
     * @param {String} pageName Name of the page that have been clicked.
     * @return {undefined}
     */
    updateCurentPage(pageName) {
      this.currentPage = pageName;
    }
  } 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height: 100%;
  width: 100%;
}
#vue-icon{
  height: 5em;
}
</style>