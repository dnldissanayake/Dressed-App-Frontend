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

export const deleteDesign = async (id: number) => {
  return api.delete(`/design/${id}`);
};
export const updateDesign = async (id: number, designData: any) => {
    return await fetch(`http://localhost:5127/api/design/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(designData)
    });
  };