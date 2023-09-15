import { UiColor } from "./ui-color";
import { UiTypo } from "./ui-typo";

const directives: Array<{name: string, body: any}> = [
  {
    name: 'ui-color',
    body: UiColor,
  },
  {
    name: 'ui-typo',
    body: UiTypo,
  },
];

export default class Directive {
  public static install(app: any) {
    directives.map((elem) => {
      app.directive(elem.name, elem.body);
    });
  }  
}
