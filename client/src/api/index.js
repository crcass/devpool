import axios from 'axios';

export async function getData(endpoint) {
  try {
    const response = await axios.get(endpoint);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function postData(endpoint, data) {
  try {
    const response = await axios.post(endpoint, data);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function putData(endpoint, data) {
  try {
    const response = await axios.put(endpoint, data);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function deleteData(endpoint) {
  try {
    const response = await axios.delete(endpoint);
    return response;
  } catch (error) {
    throw error;
  }
}
