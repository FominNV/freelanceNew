import { PageLayouts, PathNames, RouteNames } from '@/entities/enums';
import { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  {
    path: PathNames.Settings,
    name: RouteNames.SETTINGS,
    component: () => import('@/modules/settings-module/views/SettingsModuleIndex.vue'),
    meta: {
      layout: PageLayouts.DefaultLayout,
    },
  },
];
