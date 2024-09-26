// src/pages/users/UserDetailsModal.js
import React, { useState, useEffect } from 'react';
import { Modal, Spin, message, Avatar } from 'antd';
import { getUserById } from '../../services/userService'; // Assuming you have a service for getting user details
import { UserOutlined } from '@ant-design/icons';

const UserDetailsModal = ({ userId, visible, onClose }) => {
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (userId && visible) {
      fetchUserDetails(userId);
    }
  }, [userId, visible]);

  const fetchUserDetails = async (id) => {
    setLoading(true);
    try {
      const data = await getUserById(id);
      setUserDetails(data[0]);
    } catch (error) {
      message.error('Failed to fetch user details');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      key={userId}
      title="User Details"
      visible={visible}
      onCancel={onClose}
      footer={null}
      className="max-w-lg mx-auto p-6"
    >
      {loading ? (
        <div className="flex justify-center items-center h-48">
          <Spin size="large" />
        </div>
      ) : (
        userDetails && (
          <div className="flex flex-col items-center space-y-6">
            {/* User Avatar */}
            <Avatar
              size={120}
              icon={!userDetails?.avatar_url && <UserOutlined />}
              src={userDetails?.avatar_url || 'https://via.placeholder.com/120'}
              className="border border-gray-200 shadow-lg rounded-full"
            />

            {/* User Info */}
            <div className="text-center">
              <h2 className="text-xl font-semibold">{userDetails?.full_name || 'N/A'}</h2>
              <p className="text-gray-500">{userDetails?.email || 'N/A'}</p>
            </div>

            <div className="w-full border-t border-gray-300 my-4"></div>

            {/* User Details */}
            <div className="grid grid-cols-2 gap-4 text-center w-full">
              <div>
                <p className="text-gray-600 font-medium">Phone:</p>
                <p className="text-gray-800">{userDetails?.phone_number || 'N/A'}</p>
              </div>
              <div>
                <p className="text-gray-600 font-medium">Address:</p>
                <p className="text-gray-800">{userDetails?.address || 'N/A'}</p>
              </div>
              <div>
                <p className="text-gray-600 font-medium">Bio:</p>
                <p className="text-gray-800">{userDetails?.bio || 'No bio available'}</p>
              </div>
              <div>
                <p className="text-gray-600 font-medium">Joined:</p>
                <p className="text-gray-800">
                  {userDetails?.created_at
                    ? new Date(userDetails.created_at).toLocaleDateString()
                    : 'N/A'}
                </p>
              </div>
            </div>
          </div>
        )
      )}
    </Modal>
  );
};

export default UserDetailsModal;
