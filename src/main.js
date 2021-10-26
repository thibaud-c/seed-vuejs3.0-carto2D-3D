import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bulma/css/bulma.css';

const VUE_APP = createApp(App) 
VUE_APP.use(router)
VUE_APP.mount('#app')
