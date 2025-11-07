import axios from 'axios';

// Use environment variable for production, fallback to localhost for development
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth API
export const authAPI = {
  register: (name, email, password) => 
    api.post('/register', { name, email, password }),
  
  login: (email, password) => 
    api.post('/login', { email, password }),
  
  getProfile: () => 
    api.get('/user/profile'),
};

// Progress API
export const progressAPI = {
  getProgress: () => 
    api.get('/progress'),
  
  updateProgress: (lessonId, topicId, completed, code) => 
    api.post('/progress/update', { 
      lesson_id: lessonId, 
      topic_id: topicId, 
      completed, 
      code 
    }),
};

// Code Execution API
export const codeAPI = {
  execute: (code) => 
    api.post('/execute', { code }),
};

// Project API
export const projectAPI = {
  submit: (projectType, code) => 
    api.post('/project/submit', { project_type: projectType, code }),
};

// Certificate API
export const certificateAPI = {
  generate: () => 
    api.post('/certificate/generate'),
  
  download: (certId) => 
    `${API_URL}/certificate/download/${certId}`,
};

export default api;
