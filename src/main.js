
import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {routes} from './Router/index'
import VueRouter from "vue-router"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'



// Vue.use(BootstrapVue)
Vue.use(VueRouter)
library.add(fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
Vue.use(VueAxios, axios)
const router = new VueRouter({
  mode: "history",
  routes: routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
}
});
new Vue({
  el: "#app",
  router: router,
  render: (h) => h(App),
});