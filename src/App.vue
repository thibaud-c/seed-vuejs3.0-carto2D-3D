<template>
  <img id="vue-icon" src="./assets/logo.png"/>
  <!-- Bulma: menu tabs -->
  <div class="tabs is-centered">
    <ul>
      <li v-for="menu in menuList" :key="menu.name" :class="{ 'is-active': currentRoute === menu.route }">
          <router-link :to="menu.route"> {{ menu.menuname }} </router-link>
      </li>
    </ul>
  </div>
  <!-- end Bulma: menu tabs -->
  <router-view />
</template>

<script>
export default {
  name: 'App-root',
  data(){
    return {
      menuList:[
        {
          menuname:"Hello",
          route:"/"
        },
        { 
          menuname:"Axios",
          route:"/axios"
        },
        { 
          menuname:"2d_openlayers",
          route:"/openlayers"
        },
        { 
          menuname:"2d_leaflet",
          route:"/leaflet"
        },
        { 
          menuname:"3d_cesium",
          route:"/cesium"
        }
      ] 
    }
  },
  computed: {
    currentRoute(){
      return this.$route.path;
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