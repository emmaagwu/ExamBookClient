import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AuthPage from './pages/AuthPage';
import AdminDashboard from './pages/AdminDashboard';
import AllUsers from './pages/admin/AllUsersPage';
import CreateUser from './pages/admin/CreateUserPage';
import EditUser from  './pages/admin/EditUserPage';
import AdminLayout from './components/admin/Layout/AdminLayout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />} />

        {/* Admin Routes wrapped with AdminLayout */}
        <Route path="/admin/*" element={
          <AdminLayout>
            <Routes>
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="users" element={<AllUsers />} />
              <Route path="users/create" element={<CreateUser />} />
              <Route path="/users/edit/:userId" element={<EditUser />} />
            </Routes>
          </AdminLayout>
        } />
      </Routes>
    </Router>
  );
}

export default App;
