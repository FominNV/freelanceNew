import { IModule } from "@/types";
import { Router } from "vue-router";

export default class Core {
  public static registerModules(modules: IModule[], router: Router) {
    modules.forEach((elem) => {
      if (elem.enabled && Array.isArray(elem.routes)) {
        elem.routes.forEach((route) => {router.addRoute(route);});
      }
    });
  }
}
