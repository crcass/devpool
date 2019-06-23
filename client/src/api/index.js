import axios from 'axios';

export async function getStudent(user) {
  const url = `https://api.github.com/users/${user}`;
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function getStudents() {
  try {
    const response = await axios.get('/api/students/');
    return response;
  } catch (error) {
    throw error;
  }
}

export async function loadStudent(user) {
  try {
    const response = await axios.get(`/api/students/${user}`);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function getComments(user) {
  try {
    const response = await axios.get(`/api/comments/${user}`);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function postComment(user, data) {
  try {
    const response = await axios.post(`/api/comments/${user}`, data);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function deleteComment(id) {
  try {
    const response = await axios.delete(`/api/comments/${id}`);
    return response;
  } catch (error) {
    throw error;
  }
}
