import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { siderMenus, SiderMenuInterface } from './config';

const defaultOpenKeys = siderMenus.map(menu => menu.path);

const Sider: React.FC<{
  pathname: string;
}> = ({ pathname }) => {
  const getMenuItem = (menu: SiderMenuInterface) => (
    <Menu.Item key={menu.path}>
      <Link to={menu.path}>{menu.text}</Link>
    </Menu.Item>
  );
  return (
    <Layout.Sider theme="light" width={200} style={{ overflowY: 'auto' }}>
      <Menu
        theme="light"
        mode="inline"
        defaultOpenKeys={defaultOpenKeys}
        defaultSelectedKeys={[pathname]}
      >
        {siderMenus.map(menu => {
          if (menu.children && menu.children.length > 0) {
            return (
              <Menu.SubMenu key={menu.path} title={menu.text}>
                {menu.children.map(subMenu => getMenuItem(subMenu))}
              </Menu.SubMenu>
            );
          }
          return getMenuItem(menu);
        })}
      </Menu>
    </Layout.Sider>
  );
};

export default Sider;
