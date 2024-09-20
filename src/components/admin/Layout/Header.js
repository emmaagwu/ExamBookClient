import React from 'react';
import { Layout, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Header } = Layout;

const AdminHeader = () => {
  return (
    <Header className="bg-white shadow-md flex justify-between items-center px-4">
      <div className="text-2xl font-bold">Admin Dashboard</div>
      <div>
        <Avatar size="large" icon={<UserOutlined />} />
        <span className="ml-2">Admin Name</span>
      </div>
    </Header>
  );
};

export default AdminHeader;
