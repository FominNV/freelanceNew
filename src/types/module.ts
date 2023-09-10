import { ModuleNames } from "@/entities/enums";
import { RouteRecordRaw } from "vue-router";

export interface IModule {
  name: ModuleNames,
  routes?: RouteRecordRaw[];
  enabled: boolean;
}
