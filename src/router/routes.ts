import { RouteRecordRaw } from "vue-router";
import { PageLayouts, RouteNames } from "../entities/enums";

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: RouteNames.HOME,
    component: () => import('@/modules/home-module/views/HomeIndexView.vue'),
    meta: {
      layout: PageLayouts.DefaultLayout,
    },
  },
  // {
  //   path: '/admin',
  //   name: 'Admin',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Admin.vue'),
  //   meta: {
  //     guard: true,
  //     layout: 'DefaultLayout',
  //   },
  // },
  // {
  //   path: '/not-found',
  //   name: RouteNames.NotFound,
  //   component: NotFound,
  //   meta: {
  //     layout: 'DefaultLayout',
  //   },
  // },
  // {
  //   path: '/denied',
  //   name: RouteNames.FailureCausesCreate,
  //   component: Forbidden,
  //   meta: {
  //     layout: 'DefaultLayout',
  //   },
  // },
  // {
  //   path: '*',
  //   redirect: {
  //     name: RouteNames.NotFound,
  //   },
  // },

];
