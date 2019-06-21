const findMatch = (arr, login) =>
  arr.filter(item => item.github === login)[0].name;

export const formatDetailAPIResults = (students, data) => ({
  image: data[0].owner.avatar_url,
  name: findMatch(students, data[0].owner.login),
  profile: data[0].owner.html_url,
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
  id: data.id,
  image: data.avatar_url,
  name: student.name
});

export const titleCase = str =>
  str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
