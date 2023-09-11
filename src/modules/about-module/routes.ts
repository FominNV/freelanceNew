import { PageLayouts, PathNames, RouteNames } from '@/entities/enums';
import { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  {
    path: PathNames.About,
    name: RouteNames.ABOUT,
    component: () => import('@/modules/about-module/views/AboutIndexView.vue'),
    meta: {
      layout: PageLayouts.DefaultLayout,
    },
  },
];
