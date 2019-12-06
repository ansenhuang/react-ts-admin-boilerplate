import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { siderMenus, SiderMenuInterface } from './config';

const defaultOpenKeys = siderMenus.map(menu => menu.path);

const Sider: React.FC<{
  pathname: string;
}> = ({ pathname }) => {
  console.log(pathname);

  const getMenuItem = (menu: SiderMenuInterface) => (
    <Menu.Item key={menu.path}>
      <Link to={menu.path}>
        {menu.icon && <Icon type={menu.icon} />}
        {menu.text}
      </Link>
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
              <Menu.SubMenu
                key={menu.path}
                title={
                  <>
                    {menu.icon && <Icon type={menu.icon} />}
                    {menu.text}
                  </>
                }
              >
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
