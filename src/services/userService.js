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


export const updateUser = async (userId, updatedData) => {
  const formData = new FormData();

  // Append text fields to FormData
  formData.append('full_name', updatedData.full_name);
  formData.append('bio', updatedData.bio);
  formData.append('phone_number', updatedData.phone_number);
  formData.append('address', updatedData.address);

  console.log(updatedData.full_name);
  console.log("I am here");


  // Append image file (if any)
  if (updatedData.avatar) {
    formData.append('avatar', updatedData.avatar); // `avatar` should be the field name for the image
  }


  for (let pair of formData.entries()) {
    console.log(pair[0] + ': ' + pair[1]); // Log each key-value pair
  }


  return await fetchWithAuth(`/users/admin/users/${userId}`, {
    method: 'PUT',
    body: formData, // Use formData for sending both files and text
  });
};