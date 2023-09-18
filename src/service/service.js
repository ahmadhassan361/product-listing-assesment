import axios from 'axios';
import { BASE_URL } from '../utils/contants';

export const getProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/products`);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Unexpected status code');
    }
  } catch (error) {
    if (error.response) {

      throw new Error(`Request failed with status ${error.response.status}`);
    } else if (error.request) {

      throw new Error('Request failed. No response received.');
    } else {

      throw new Error('Error setting up the request');
    }
  }
};
