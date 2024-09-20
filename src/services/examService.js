import { fetchWithAuth } from './apiService';

export const getExams = async () => {
  return await fetchWithAuth('/exams/', { method: 'GET' });
};
