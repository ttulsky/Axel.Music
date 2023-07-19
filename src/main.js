import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import store from "./store";
import router from "./router";
import "./assets/global.css";

import VuePlyr from "vue-plyr";
import "vue-plyr/dist/vue-plyr.css";

loadFonts();

createApp(App)
  .use(VuePlyr, {
    plyr: {},
  })
  .use(router)
  .use(store)
  .use(vuetify)
  .mount("#app");
