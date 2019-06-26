export const FETCH_REPOS = 'FETCH_REPOS';
export const RESET_STUDENT = 'RESET_STUDENT';
export const REPOS_RECEIVED = 'REPOS_RECEIVED';

export const fetchRepos = payload => ({
  type: FETCH_REPOS,
  payload
});

export const resetStudent = () => ({ type: RESET_STUDENT });
