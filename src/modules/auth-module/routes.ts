import { PageLayouts, PathNames, RouteNames } from "@/entities/enums";
import { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
  {
    path: PathNames.Login,
    name: RouteNames.LOGIN,
    component: () => import('@/modules/auth-module/views/AuthLoginView.vue'),
    meta: {
      layout: PageLayouts.LoginLayout,
    },
  },
];
