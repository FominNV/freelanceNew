import { ModuleNames } from "@/entities/enums";
import { IModule } from "@/types";
import { routes } from "./routes";

const settingsModule: IModule = {
  name: ModuleNames.SettingsModule,
  routes,
  enabled: true,
};

export default settingsModule;
