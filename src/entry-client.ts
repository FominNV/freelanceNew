import UI from './UI/index';
import { createApp } from './main';
import router from './router';
import SvgIcon from "vue3-icon";
import { createVuestic } from "vuestic-ui";
import Directive from './directives';
import Views from './views';
import LayoutSwitcher from '@/layouts/LayoutSwitcher.vue';
import Core from './core';
import { modules } from './modules';

const { app } = createApp();

Core.registerModules(modules, router);

app.component('SvgIcon', SvgIcon);
app.component('LayoutSwitcher', LayoutSwitcher);
Directive.install(app);
UI.install(app);
Views.install(app);
app.use(createVuestic());
app.use(router);
app.mount('#app');
