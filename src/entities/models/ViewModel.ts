import AbstactsViewModel from "./AbstractViewModel";

export default class ViewModel extends AbstactsViewModel {
  static fromJS(data: any): any {
    const result = new this();
    result.init(data);
    return result;
  }

  init(data?: any) {
    // eslint-disable-next-line
    console.log(data);
  }

  toJSON(data?: any) {
    // eslint-disable-next-line
    console.log(data);
  }

  public static trim<T>(model: T): T {
    Object.keys(model).forEach((key: string) => {
      if (typeof model[key] === 'string') {
        model[key] = model[key].trim();
      }
    });
    return model;
  }

}
