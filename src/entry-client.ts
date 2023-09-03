import UI from './UI/index';
import { createApp } from './main';
import router from './router';
import SvgIcon from "vue3-icon";

const { app } = createApp();

app.component('SvgIcon', SvgIcon);

UI.install(app);
app.use(router);
app.mount('#app');
