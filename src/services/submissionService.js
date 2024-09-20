import { fetchWithAuth } from './apiService';

export const getSubmissions = async () => {
  return await fetchWithAuth('/submissions/', { method: 'GET' });
};
