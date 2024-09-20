import React from 'react';
import { Layout } from 'antd';
import AdminHeader from './Header';
import Sidebar from './Sidebar';
import AdminFooter from './Footer';

const { Content } = Layout;

const AdminLayout = ({ children }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Layout>
        <AdminHeader />
        <Content style={{ margin: '16px' }}>
          {children}
        </Content>
        <AdminFooter />
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
