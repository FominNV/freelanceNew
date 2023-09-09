import * as directives from './tools';

export default class Directive {
  public static install(app: any) {
    // directives.map(([name, body]) => {
    //   app.directive(name, { ...body });
    // });

    if (directives) {
      Object.keys(directives).forEach((key: string) => {
        const directive = directives[key];
        app.directive(key, directive);
      });
      return true;
    }
    return false;

  }
}
