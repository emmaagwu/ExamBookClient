// services/apiService.js
import { refreshAccessToken } from './authService';
import { Logout } from './logout';

const API_URL = 'http://localhost:5000';

export const fetchWithAuth = async (url, options = {}) => {
  try {
    let token = localStorage.getItem('token');
    console.log('JWT Token:', token); // Debugging

    const headers = {
      'Authorization': `Bearer ${token}`,  // Attach token to all requests
    };

    // Check if the body is FormData and don't set the Content-Type
    if (!(options.body instanceof FormData)) {
      headers['Content-Type'] = 'application/json';
    }

    let response = await fetch(`${API_URL}${url}`, {
      ...options,
      headers: { ...headers, ...options.headers }, // Merge any custom headers
    });

    // If the request fails with a 401 (Unauthorized), refresh the token
    if (response.status === 401) {
      console.log('Access token expired, attempting to refresh...');
      const newAccessToken = await refreshAccessToken();

      // Retry the original request with the new access token
      headers['Authorization'] = `Bearer ${newAccessToken}`;
      response = await fetch(`${API_URL}${url}`, {
        ...options,
        headers: { ...headers, ...options.headers },
      });
    }

    if (!response.ok) {
      throw new Error(`Request failed: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Fetch with auth error:', error);
    Logout(); // Log out the user on error
    throw error;
  }
};