import App from "./App.vue";
import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "@/routers";
import "@/styles/global.css";

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount("#app");
