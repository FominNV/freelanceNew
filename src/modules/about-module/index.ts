import { ModuleNames } from "@/entities/enums";
import { IModule } from "@/types";
import { routes } from "./routes";

const aboutModule: IModule = {
  name: ModuleNames.AboutModule,
  routes,
  enabled: true,
};

export default aboutModule;
