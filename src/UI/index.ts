import components from './components';

export default class UI {  
  static install(vue: any) {
    (Object.entries(components).forEach(([name, component]) => {
      vue.component(name, component);
    }));    
  }
}

// declare module 'vue' {
//   interface GlobalComponents {
//     UiTextAnimater: typeof components['UiTextAnimater'];
//     UiContainer: typeof components['UiContainer'];
//   }
// }
