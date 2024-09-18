import React from 'react';
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  FileTextOutlined,
  DashboardOutlined,
  FormOutlined,
  CheckSquareOutlined,
  FileDoneOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Sider } = Layout;
const { SubMenu } = Menu;

const Sidebar = () => {
  return (
    <Sider width={250} className="site-layout-background">
      <Menu
        mode="inline"
        defaultSelectedKeys={['dashboard']}
        style={{ height: '100%', borderRight: 0 }}
      >
        {/* Dashboard Home */}
        <Menu.Item key="dashboard" icon={<DashboardOutlined />}>
          <Link to="/admin/dashboard">Dashboard Overview</Link>
        </Menu.Item>

        {/* Manage Users Collapsible Menu */}
        <SubMenu key="manageUsers" icon={<UserOutlined />} title="Manage Users">
          <Menu.Item key="allUsers">
            <Link to="/admin/users">All Users</Link>
          </Menu.Item>
          <Menu.Item key="createUser">
            <Link to="/admin/users/create">Create New User</Link>
          </Menu.Item>
          {/* Additional user management options can be added here */}
        </SubMenu>

        {/* Manage Exams Collapsible Menu */}
        <SubMenu key="manageExams" icon={<FileTextOutlined />} title="Manage Exams">
          <Menu.Item key="allExams">
            <Link to="/admin/exams">All Exams</Link>
          </Menu.Item>
          <Menu.Item key="createExam">
            <Link to="/admin/exams/create">Create New Exam</Link>
          </Menu.Item>
          {/* Additional exam management options like assigning questions, etc. */}
        </SubMenu>

        {/* Manage Questions Collapsible Menu */}
        <SubMenu key="manageQuestions" icon={<FormOutlined />} title="Manage Questions">
          <Menu.Item key="allQuestions">
            <Link to="/admin/questions">All Questions</Link>
          </Menu.Item>
          <Menu.Item key="createQuestion">
            <Link to="/admin/questions/create">Create New Question</Link>
          </Menu.Item>
          {/* Additional question management options */}
        </SubMenu>

        {/* Manage Submissions Collapsible Menu */}
        <SubMenu key="manageSubmissions" icon={<CheckSquareOutlined />} title="Manage Submissions">
          <Menu.Item key="allSubmissions">
            <Link to="/admin/submissions">All Submissions</Link>
          </Menu.Item>
          <Menu.Item key="gradeSubmissions">
            <Link to="/admin/submissions/grade">Grade Submissions</Link>
          </Menu.Item>
          {/* Additional submission management options */}
        </SubMenu>

        {/* Other features can be added below */}
      </Menu>
    </Sider>
  );
};

export default Sidebar;
