// src/pages/admin/EditUserPage.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Form, Input, Button, Upload, message } from 'antd';
import { getUserById, updateUser } from '../../services/userService';
import { UploadOutlined } from '@ant-design/icons';

const EditUserPage = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [form] = Form.useForm(); // Ant Design form instance
  const [userData, setUserData] = useState(null); // State for storing user data
  const [loading, setLoading] = useState(false); // Loading state
  const [fileList, setFileList] = useState([]); // State for managing file uploads

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getUserById(userId); // Fetch user data by ID
        setUserData(user[0]); // Store user data in state
        form.setFieldsValue(user[0]); // Prefill form fields with the fetched user data

        // Set initial fileList for the Upload component if there's an avatar
        if (user.avatar) {
          setFileList([{ uid: user.id, name: user.avatar, status: 'done', url: user.avatar }]);
        }
      } catch (error) {
        message.error('Failed to fetch user details.');
      }
    };

    fetchUser();
  }, [userId, form]);

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      // If an avatar file is uploaded, append it to the form data
      const updatedUserData = { ...values, avatar: fileList[0]?.originFileObj }; // Assuming only one file is uploaded

      console.log(updatedUserData);
      console.log("I am here again");

      await updateUser(userId, updatedUserData); // Update the user

      console.log("I am here");

      message.success('User updated successfully');
      navigate('/admin/users'); // Redirect to users list after success
    } catch (error) {
      message.error('Failed to update user');
    } finally {
      setLoading(false);
    }
  };

  const handleUploadChange = ({ fileList: newFileList }) => {
    setFileList(newFileList); // Update the file list state
  };

  if (!userData) {
    return <p>Loading...</p>; // Show loading state until data is fetched
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Edit User</h2>

        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          initialValues={userData} // Prefill form fields with the fetched user data
        >
          <Form.Item
            name="full_name"
            label="Full Name"
            rules={[{ required: true, message: 'Please enter the full name' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="bio"
            label="Bio"
            rules={[{ required: true, message: 'Please enter a bio' }]}
          >
            <Input.TextArea rows={4} />
          </Form.Item>

          <Form.Item
            name="phone_number"
            label="Phone Number"
            rules={[{ required: true, message: 'Please enter a phone number' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="address"
            label="Address"
            rules={[{ required: true, message: 'Please enter the address' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item name="avatar" label="Upload Avatar">
            <Upload 
              fileList={fileList} // Manage file list for Upload component
              onChange={handleUploadChange} // Handle changes to the file list
              beforeUpload={() => false} // Prevent auto upload
            >
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              Save Changes
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default EditUserPage;
