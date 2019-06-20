import axios from 'axios';

export async function getStudent(name) {
  const url = `https://api.github.com/users/${name}`;
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    throw error;
  }
}
