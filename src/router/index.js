import { createWebHistory, createRouter } from "vue-router";
import VhelloWorld from "@/components/views/ViewHome.vue";
import Vleaflet from "@/components/views/ViewLeaflet.vue";
import Vcesium from "@/components/views/ViewCesium.vue";
import Vaxios from "@/components/views/ViewAxios.vue";
import Vopenlayers from "@/components/views/ViewOpenlayers.vue";
import NotFound404 from "@/components/errors/404page.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: VhelloWorld,
  },
  {
    path: "/axios",
    name: "Axios",
    component: Vaxios,
  },
  {
    path: "/openlayers",
    name: "Openlayers",
    component: Vopenlayers,
  },
  {
    path: "/leaflet",
    name: "Leaflet",
    component: Vleaflet,
  },
  {
    path: "/cesium",
    name: "Cesium",
    component: Vcesium,
  },
  {
    path: "/:catchAll(.*)",
    name: "404 page",
    component: NotFound404,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
