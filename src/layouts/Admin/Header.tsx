import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import css from './style.module.css';
import { headerLinks } from './config';

const Header: React.FC = () => {
  return (
    <Layout.Header>
      <div className={css.logo} />
      <Menu theme="dark" mode="horizontal" style={{ lineHeight: '64px' }}>
        {headerLinks.map(item => (
          <Menu.Item>
            <Link to={item.path + (item.search || '')}>{item.text}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </Layout.Header>
  );
};

export default Header;
