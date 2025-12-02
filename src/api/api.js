// src/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL || '/api', 
  headers: {
    'Content-Type': 'application/json',
  },
});

// Utility function to get token from localStorage
const getAuthToken = () => {
  const storedUser = localStorage.getItem('courseMasterUser');
  if (storedUser) {
    return JSON.parse(storedUser).token;
  }
  return null;
};

// Interceptor to attach token to all outgoing requests (for protected routes/data)
API.interceptors.request.use(config => {
  const token = getAuthToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

// --- Auth Endpoints ---

// Login (POST /api/auth/login)
export const login = async (credentials) => {
  const response = await API.post('/auth/login', credentials);
  return response.data; // Should contain { user, token }
};

// Register (POST /api/auth/register)
export const register = async (userData) => {
  const response = await API.post('/auth/register', userData);
  return response.data;
};

// --- Course Endpoints ---

// Fetch all courses (GET /api/courses) - Public Page requirement [cite: 23]
export const fetchCourses = async (params) => {
    // params include: search, sort, filter, page (for pagination) [cite: 27]
    const response = await API.get('/courses', { params });
    return response.data;
};

// Fetch single course details (GET /api/courses/:id) [cite: 28]
export const fetchCourseDetails = async (courseId) => {
    const response = await API.get(`/courses/${courseId}`);
    return response.data;
};