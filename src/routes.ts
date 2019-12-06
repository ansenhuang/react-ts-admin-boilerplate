import React from 'react';
import { RouteProps, RedirectProps } from 'react-router-dom';
import AdminLayout from './layouts/Admin';
import NotFound from './pages/NotFound';

interface RouteConfig extends RouteProps {
  path: string;
  layout?: React.ComponentType<any>;
  routes?: (RouteProps | RedirectProps)[];
}

// render order: children > component > render
const routes: RouteConfig[] = [
  {
    path: '/admin',
    layout: AdminLayout,
    routes: [
      {
        path: '/admin/dashboard',
        component: React.lazy(() => import('./pages/Dashboard')),
      },
      {
        component: NotFound,
      },
    ],
  },
  // This path must be in the last one, otherwise the following routes won't work.
  {
    path: '/',
    routes: [
      {
        path: '/',
        component: React.lazy(() => import('./pages/Home')),
      },
      {
        to: '/',
        component: React.lazy(() => import('./pages/Home')),
      },
    ],
  },
];

export default routes;
