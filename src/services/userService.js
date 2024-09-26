import { fetchWithAuth } from './apiService';

export const getUsers = async () => {
  return await fetchWithAuth('/users/admin/users', { method: 'GET' });
};

export const getUserById = async (userId) => {
  return await fetchWithAuth(`/users/admin/users/${userId}`, { method: 'GET' });
};


export const createUser = async (userData) => {
  return await fetchWithAuth('/users', {
    method: 'POST',
    body: JSON.stringify(userData),
  });
};

export const deleteUser = async (userId) => {
  return await fetchWithAuth(`/users/${userId}`, { method: 'DELETE' });
};