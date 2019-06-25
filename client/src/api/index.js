import axios from 'axios';

export async function getStudent(id) {
  const url = `https://api.github.com/users/${id}`;
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

export async function loadStudent(id) {
  const url = `/api/students/${id}`;
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function getComments(id, author) {
  const url = `/api/comments/${id}/${author}`;
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function postComment(user, author, data) {
  try {
    const response = await axios.post(`/api/comments/${user}/${author}`, data);
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
