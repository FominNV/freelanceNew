import { PageLayouts, PathNames, RouteNames } from "@/entities/enums";
import { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
  {
    path: PathNames.Login,
    name: RouteNames.LOGIN,
    component: () => import('@/modules/auth-module/views/AuthModuleLogin.vue'),
    meta: {
      layout: PageLayouts.LoginLayout,
    },
  },
  {
    path: PathNames.Register,
    name: RouteNames.REGISTER,
    component: () => import('@/modules/auth-module/views/AuthModuleRegister.vue'),
    meta: {
      layout: PageLayouts.LoginLayout,
    },
  },
];
