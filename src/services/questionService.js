import { fetchWithAuth } from './apiService';

export const getQuestions = async () => {
  return await fetchWithAuth('/questions/', { method: 'GET' });
};
