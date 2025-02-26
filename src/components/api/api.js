// src/api.js
import axios from 'axios';

// Define the base URL for your API
const BASE_URL = 'http://localhost:8080/api/customer';

// Function to handle login
export const login = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, { email, password });
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Login failed. Please try again.';
  }
};

// Function to handle signup
export const signup = async (username, email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/register`, { username, email, password });
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Registration failed. Please try again.';
  }
};

// Other API functions can be added here as needed (e.g., fetching user data, etc.)
