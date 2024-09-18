// src/components/Logout.js

import { useNavigate } from 'react-router-dom';

export const Logout = () => {
    const navigate = useNavigate();

    const logoutUser = () => {
        // Clear tokens
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');

        // Redirect to login
        navigate('/login');
    };

    return (
        <button onClick={logoutUser} className="w-full bg-red-500 text-white py-2 px-4 rounded-md">Logout</button>
    );
};
