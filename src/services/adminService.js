const API_URL = 'http://localhost:5000';

export const fetchTotalUsers = async () => {
  const response = await fetch(`${API_URL}/admin/total-users`);
  if (!response.ok) {
    throw new Error('Error fetching total users');
  }
  return response.json();
};

export const fetchTotalExams = async () => {
  const response = await fetch(`${API_URL}/admin/total-exams`);
  if (!response.ok) {
    throw new Error('Error fetching total exams');
  }
  return response.json();
};
