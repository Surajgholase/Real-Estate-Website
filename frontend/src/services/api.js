import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  withCredentials: true, // Crucial for sessions/cookies
});

export const getContent = async () => {
  const response = await api.get('/content');
  return response.data;
};

export const updateContent = async (content) => {
  const response = await api.put('/content', { content });
  return response.data;
};

export const login = async (credentials) => {
  const response = await api.post('/login', credentials);
  return response.data;
};

export const logout = async () => {
  const response = await api.post('/logout');
  return response.data;
};

export const checkAuth = async () => {
  const response = await api.get('/me');
  return response.data;
};

export default api;
