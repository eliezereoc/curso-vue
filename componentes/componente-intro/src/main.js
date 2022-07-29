import { createApp } from "vue";
import App from "./App.vue";
import MeuContador from "./Contador.vue";

createApp(App).mount("#app");
createApp(MeuContador).mount("app-contador");
