// src/services/authService.js

const API_BASE_URL = 'http://localhost:5000/auth';

export const signupUser = async (userData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Signup failed');
        }

        return await response.json();
    } catch (error) {
        throw new Error(error.message);
    }
};

export const loginUser = async (credentials) => {
    try {
        const response = await fetch(`${API_BASE_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Login failed');
        }

        return await response.json();
    } catch (error) {
        throw new Error(error.message);
    }
};


// Function to refresh the access token
export const refreshAccessToken = async () => {
    const refresh_token = localStorage.getItem('refresh_token');
    if (!refresh_token) {
        throw new Error('No refresh token available');
    }
    console.log(refresh_token)
    try {
        const response = await fetch(`${API_BASE_URL}/refresh`, {
            method: 'POST',
            headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${refresh_token}`,
            },
            body: JSON.stringify({ refresh_token }),
        });

        if (!response.ok) {
            throw new Error('Failed to refresh token');
        }

        const data = await response.json();
        const { access_token } = data;

        // Update the access token in local storage
        localStorage.setItem('access_token', access_token);

        return access_token;
    } catch (error) {
        console.error('Error refreshing access token:', error);
        throw error;
    }
};
