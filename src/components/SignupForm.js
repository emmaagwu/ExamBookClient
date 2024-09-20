// src/components/SignupForm.js
import React, { useState } from 'react';
import { signupUser } from '../services/authService';

const SignupForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        admin_code: ''
    });
    const [isAdmin, setIsAdmin] = useState(false); // Toggle for admin field
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleAdminToggle = () => {
        setIsAdmin(!isAdmin);
        if (!isAdmin) {
            setFormData({ ...formData, admin_code: '' });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await signupUser(formData);
            setMessage(`Account successfully created for ${response.username}`);
            setError('');
        } catch (err) {
            setMessage('');
            setError('Failed to create account. Please check your inputs and try again.');
        }
    };

    return (
          <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
            {message && <p className="text-green-600">{message}</p>}
            {error && <p className="text-red-600">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="inline-flex items-center">
                        <input
                            type="checkbox"
                            checked={isAdmin}
                            onChange={handleAdminToggle}
                            className="form-checkbox text-indigo-600"
                        />
                        <span className="ml-2">Creating an admin account?</span>
                    </label>
                </div>
                {isAdmin && (
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="admin_code">
                            Admin Code
                        </label>
                        <input
                            type="text"
                            name="admin_code"
                            value={formData.admin_code}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                        />
                    </div>
                )}
                <button
                    type="submit"
                    className="bg-indigo-600 text-white font-bold py-2 px-4 rounded hover:bg-indigo-500"
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default SignupForm;
