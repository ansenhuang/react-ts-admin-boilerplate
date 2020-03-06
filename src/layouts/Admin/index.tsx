import React from 'react';
import { Layout } from 'antd';
import { Location } from 'history';
import AdminHeader from './Header';
import AdminSider from './Sider';

const AdminLayout: React.FC<{
  location: Location<any>;
}> = ({ location, children }) => {
  return (
    <Layout style={{ height: '100vh' }}>
      <AdminHeader />
      <Layout>
        <AdminSider pathname={location.pathname} />
        <Layout.Content style={{ overflow: 'auto' }}>{children}</Layout.Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
