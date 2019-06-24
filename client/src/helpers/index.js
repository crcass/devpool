export const formatAuthenticatedUser = data => ({
  email: data.user.email,
  name: data.user.displayName,
  provider: data.additionalUserInfo.providerId,
  uid: data.user.uid
});

export const formatDetailAPIResults = (student, data) => ({
  github: data[0].owner.html_url,
  linkedin: student.linkedin,
  image: data[0].owner.avatar_url,
  name: student.name,
  portfolio: student.portfolio,
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
