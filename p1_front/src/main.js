// Base Vue
import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// Bootstrap
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// FontAwesome
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

// Vuetify
import vuetify from "./plugins/vuetify";

// Configs
Vue.config.productionTip = false;

// Uses
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

// Creation
new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
