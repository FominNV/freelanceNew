export default abstract class AbstactsViewModel {
  constructor(data?: any) {
    if (data) {
      Object.keys(data).forEach((property) => {
        if (data.hasOwnProperty(property)) {
          this[property] = data[property];
        }
      });
    }
  }

  abstract init(data?: any): void;
  abstract toJSON(data?: any): any;
}
