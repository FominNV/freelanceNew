import { PageLayouts, PathNames, RouteNames } from '@/entities/enums';
import { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  {
    path: PathNames.Home,
    name: RouteNames.HOME,
    component: () => import('@/modules/home-module/views/HomeModuleIndex.vue'),
    meta: {
      layout: PageLayouts.DefaultLayout,
    },
  },
];
