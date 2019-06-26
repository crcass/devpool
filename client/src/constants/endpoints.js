export const createComment = (user, author) =>
  `/api/comments/${user}/${author}`;
export const removeComment = id => `/api/comments/${id}`;
export const userComments = (user, author) => `/api/comments/${user}/${author}`;

export const allJobs = id => (id ? `/api/jobs/author/${id}` : '/api/jobs/');
export const oneJob = id => `/api/jobs/${id}`;

export const savedJobs = '/api/jobs/saved';
export const oneSavedJob = id => `/api/jobs/saved/${id}`;

export const githubProfile = id => `https://api.github.com/users/${id}`;
export const allStudents = '/api/students/';
export const oneStudent = id => `/api/students/${id}`;
export const studentRepos = id =>
  `https://api.github.com/users/${id}/repos?affiliation=owner&sort=created`;
