import axios from 'axios';

const API_URL = 'http://localhost:5127/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
});

export const postDesign = async (data: any) => {
  return api.post('/design', data);
};

export const getDesigns = async () => {
  return api.get('/design');
};
