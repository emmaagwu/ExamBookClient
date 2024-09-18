import React from 'react';
import { Layout } from 'antd';
import Sidebar from '../components/admin/Layout/Sidebar';
import AdminHeader from '../components/admin/Layout/Header';
import AdminFooter from '../components/admin/Layout/Footer';
import DashboardOverview from '../components/admin/Layout/DashboardOverview';  // For metrics

const { Content } = Layout;

const AdminDashboard = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <AdminHeader />
      <Layout>
        <Sidebar />
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <DashboardOverview />
          </Content>
          <AdminFooter />
        </Layout>
      </Layout>
    </Layout>
  );
};

export default AdminDashboard;
