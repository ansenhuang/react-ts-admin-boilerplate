export interface SiderMenuInterface {
  path: string;
  icon?: string;
  text: string;
  children?: Array<{
    path: string;
    icon?: string;
    text: string;
  }>;
}

export const siderMenus: SiderMenuInterface[] = [
  {
    path: '/',
    icon: 'home',
    text: '首页',
  },
  {
    path: '/admin',
    icon: 'appstore',
    text: '后台',
    children: [
      {
        path: '/admin/dashboard',
        icon: 'dashboard',
        text: '仪表盘',
      },
      {
        path: '/admin/xxx',
        icon: 'fire',
        text: '404',
      },
    ],
  },
];

interface HeaderLinkInterface {
  path: string;
  search?: string;
  text: string;
}

export const headerLinks: HeaderLinkInterface[] = [
  {
    path: '/',
    text: 'Home',
  },
  {
    path: '/admin/dashboard',
    search: '?from=navigator',
    text: 'Dashboard',
  },
];
