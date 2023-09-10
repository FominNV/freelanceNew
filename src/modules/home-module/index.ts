import { ModuleNames } from "@/entities/enums";
import { IModule } from "@/types";
import { routes } from "./routes";

const homeModule: IModule = {
  name: ModuleNames.HomeModule,
  routes,
  enabled: true,
};

export default homeModule;
