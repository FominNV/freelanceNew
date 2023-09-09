import components from './components';

export default class UI {  
  static install(vue: any) {
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
