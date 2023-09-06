import UI from './UI/index';
import { createApp } from './main';
import router from './router';
import SvgIcon from "vue3-icon";
import { createVuestic } from "vuestic-ui";

const { app } = createApp();

app.component('SvgIcon', SvgIcon);

UI.install(app);
app.use(createVuestic());
app.use(router);
app.mount('#app');
