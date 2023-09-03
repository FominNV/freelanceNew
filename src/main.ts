import { createSSRApp } from 'vue';
import App from './App.vue';
import { useI18n } from 'vue-i18n';
import i18n from './language';
import { createPinia } from 'pinia';

const pinia = createPinia();

// SSR requires a fresh app instance per request, therefore we export a function
// that creates a fresh app instance. If using Vuex, we'd also be creating a
// fresh store here.
export function createApp() {
  const app = createSSRApp(App, {
    setup() {
      const { t } = useI18n();
      return { t };
    },
  });

  app.use(pinia);
  app.use(i18n);
  return { app };
}
