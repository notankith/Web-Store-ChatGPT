import axios from 'axios';

const apiHelper = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // Ensure to have the API URL in your .env file
  headers: {
    'Content-Type': 'application/json',
  },
});

export const get = async (url) => {
  try {
    const response = await apiHelper.get(url);
    return response.data;
  } catch (error) {
    console.error('API GET error:', error);
    throw error;
  }
};

export const post = async (url, data) => {
  try {
    const response = await apiHelper.post(url, data);
    return response.data;
  } catch (error) {
    console.error('API POST error:', error);
    throw error;
  }
};
