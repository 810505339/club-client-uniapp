import { createSSRApp } from "vue";
import * as Pinia from "pinia";
import App from "./App.vue";
import i18n from "@/locale/index";
import uviewPlus from 'uview-plus'

export function createApp() {
  const app = createSSRApp(App);
  app.use(uviewPlus);
  app.use(Pinia.createPinia());
  app.use(i18n);

  return {
    app,
    Pinia,
  };
}
