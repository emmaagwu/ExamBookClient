import { fetchWithAuth } from './apiService';

export const getUsers = async () => {
  return await fetchWithAuth('/users/admin/users', { method: 'GET' });
};
