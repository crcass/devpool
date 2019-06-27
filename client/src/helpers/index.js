export const formatAuthenticatedUser = data => ({
  email: data.user.email,
  image: data.additionalUserInfo.avatar_url || data.user.photoURL,
  name: data.user.displayName,
  provider: data.additionalUserInfo.providerId,
  uid: data.user.uid,
  username: data.additionalUserInfo.username
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
