// src/pages/admin/CreateUserPage.js
import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { createUser } from '../../services/userService'; // Adjust service path

const CreateUserPage = () => {
  const [form] = Form.useForm();

  const handleSubmit = async (values) => {
    try {
      await createUser(values);
      message.success('User created successfully');
      form.resetFields();
    } catch (error) {
      message.error('Failed to create user');
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Create New User</h2>
      <Form form={form} onFinish={handleSubmit} layout="vertical">
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input the name!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input the email!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Create User</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateUserPage;
