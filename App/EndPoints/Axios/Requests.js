import axios, { AxiosPromise } from 'axios';

// No used yet, but this is how to create a bearer token
function bearerToken() {
  const token = localStorage.getItem('access_token');
  return {
    headers: {
      'Authorization': `Bearer ${token ? token : ''}`
    }
  }
}

// placeholder api, just check if they work!
const apiBase = 'https://some-general-api-url/api/v1';
const apiHeaders = { 'Content-Type': 'application/json' }
const axiosInstance = axios.create({
  baseURL: apiBase,
  headers: apiHeaders
});

// check manual axios
const getInstance = ({ params }) => {
  const { endPoint } = params;
  return (axiosInstance.get(`${endPoint}`, bearerToken()));
}

// check manual axios
const postInstance = ({ params }) => {
  const { endPoint } = params;
  return (axiosInstance.post(`${endPoint}`, bearerToken()));
}

// check manual axios
const putInstance = ({ params }) => {
  const { endPoint } = params;
  return (axiosInstance.put(`${endPoint}`, bearerToken()));
}

export default {
  getInstance,
  postInstance,
  putInstance
};