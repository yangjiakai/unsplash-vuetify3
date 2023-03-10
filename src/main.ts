import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import piniaPersist from "pinia-plugin-persist";
import vuetify from "./plugins/vuetify";
import "./styles/main.scss";

const app = createApp(App);
const pinia = createPinia();

pinia.use(piniaPersist);
app.use(pinia);
app.use(router);
app.use(vuetify);
app.mount("#app");
