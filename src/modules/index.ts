import { IModule } from "@/types";
import homeModule from "./home-module";
import settingsModule from "./settings-module";
import aboutModule from "./about-module";
import authModule from "./auth-module";

export const modules: IModule[] = [
  homeModule,
  settingsModule,
  aboutModule,
  authModule,
];
