import { RouteConfig } from 'vue-router/types/router';

export const PortifolioRoutes: RouteConfig[] = [
  {
    path: '/portifolio',
    name: 'portifolio',
    component: () =>
      import(/* webpackChunkName: "portifolio" */ './Portifolio/Portifolio.vue').then((m: any) => m.default),
  },
];
