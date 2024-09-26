// src/pages/users/AllUsersPage.js
import React, { useEffect, useState } from 'react';
import { Table, Button, Popconfirm, message, Spin, Input } from 'antd';
import { EditOutlined, DeleteOutlined, EyeOutlined, PlusOutlined } from '@ant-design/icons';
import { getUsers, deleteUser } from '../../services/userService';
import { Link } from 'react-router-dom';
import UserDetailsModal from './UserDetailsModal'; // Import the modal component
import 'antd/dist/reset.css'; // Resets default ANTD styles for customization with Tailwind

const AllUsersPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUserId, setSelectedUserId] = useState(null); // Track selected user for modal
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (error) {
        message.error('Failed to fetch users');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (userId) => {
    try {
      await deleteUser(userId);
      setUsers(users.filter(user => user.user_id !== userId));
      message.success('User deleted successfully');
    } catch (error) {
      message.error('Failed to delete user');
    }
  };

  const filteredUsers = users.filter(user =>
    (user?.full_name?.toLowerCase() || '').includes(searchTerm.toLowerCase())
  );

  const showUserDetails = (userId) => {
    setSelectedUserId(userId);
    setIsModalVisible(true);
  };

  const closeUserDetailsModal = () => {
    setSelectedUserId(null);
    setIsModalVisible(false);
  };

  const columns = [
    {
      title: 'Full Name',
      dataIndex: 'full_name',
      key: 'full_name',
    },
    {
      title: 'Phone Number',
      dataIndex: 'phone_number',
      key: 'phone_number',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <div className="flex space-x-2">
          <Button
            type="link"
            className="text-blue-500 hover:text-blue-700"
            icon={<EyeOutlined />}
            onClick={() => showUserDetails(record.user_id)} // Show modal on click
          >
            View
          </Button>
          <Button type="link" className="text-green-500 hover:text-green-700" icon={<EditOutlined />}>
            <Link to={`/admin/users/edit/${record.user_id}`}>Edit</Link>
          </Button>
          <Popconfirm
            title="Are you sure to delete this user?"
            onConfirm={() => handleDelete(record.user_id)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="link" className="text-red-500 hover:text-red-700" icon={<DeleteOutlined />} danger>
              Delete
            </Button>
          </Popconfirm>
        </div>
      ),
    },
  ];

  if (loading) {
    return <Spin size="large" className="flex justify-center items-center min-h-screen" />;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="mb-6 flex justify-between items-center">
        <Input
          className="w-1/3 p-2 rounded-lg border border-gray-300 shadow-sm"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button type="primary" className="flex items-center bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow">
          <PlusOutlined className="mr-2" />
          <Link to="/admin/users/create" className="text-white">Create New User</Link>
        </Button>
      </div>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <Table
          dataSource={filteredUsers}
          columns={columns}
          rowKey="user_id"
          pagination={{ pageSize: 10 }}
          className="table-striped"
          rowClassName={(record, index) => index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
        />
      </div>

      {/* User Details Modal */}
      {selectedUserId && (
        <UserDetailsModal
          userId={selectedUserId}
          visible={isModalVisible}
          onClose={closeUserDetailsModal}
        />
      )}
    </div>
  );
};

export default AllUsersPage;
