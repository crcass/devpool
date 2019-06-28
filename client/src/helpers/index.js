export const formatAuthenticatedUser = (auth, data) => ({
  company: data.company || null,
  email: auth.user.email,
  image: auth.additionalUserInfo.avatar_url || auth.user.photoURL,
  linkedin: data.linkedin,
  name: auth.user.displayName || data.name,
  portfolio: data.portfolio || null,
  provider: auth.additionalUserInfo.providerId,
  uid: auth.user.uid,
  username: auth.additionalUserInfo.username || null,
  website: data.website || null
});

export const formatRepoAPIResults = data => ({
  repos: data
    .filter((repo, i) => i < 4)
    .map(repo => ({
      description: repo.description,
      id: repo.id,
      language: repo.language,
      name: repo.name,
      url: repo.html_url
    }))
});

export const formatListAPIResults = (student, data) => ({
  github: student.github,
  githubLink: data.html_url,
  id: data.id,
  image: data.avatar_url,
  linkedin: student.linkedin,
  name: student.name,
  portfolio: student.portfolio
});

export const titleCase = str =>
  str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

export const isSaved = (arr, obj) => {
  let saved = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].jobId === obj.id) {
      saved = true;
      return saved;
    }
  }
};
