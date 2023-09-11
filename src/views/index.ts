import { App } from 'vue';
import components from './components';

export default class Views {
  static install(vue: App<Element>) {
    (Object.entries(components).forEach(([name, component]) => {
      vue.component(name, component);
    }));

    if (components) {
      Object.keys(components).forEach((key: string) => {
        const data = components[key];
        const dataType = typeof data.render === 'function' || typeof data === 'function' ? 'component' : 'directives';

        if (dataType === 'component') {
          vue.component(key, data);
          return;
        }
      });
      return true;
    }
    return false;
  }
}
