import { FETCH_REPOS } from '.';

export const fetchRepos = payload => ({
  type: FETCH_REPOS,
  payload
});
