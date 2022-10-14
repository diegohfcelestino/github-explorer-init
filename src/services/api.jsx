import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.github.com/users/"
});

export async function handleRepositoryList() {
  const auth = localStorage.getItem("user");
  const url = `https://api.github.com/users/${auth}/repos?per_page=6`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function searchProfile() {
  const auth = localStorage.getItem("user");
  const url = `https://api.github.com/users/${auth}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function searchUsersList(userName) {
  const url = `https://api.github.com/users/${userName}`;
  //const url = `https://api.github.com/search/users?q=${userName}`; para pesquisar varios usuários

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function repositoryListUsers(userName) {
  const url = `https://api.github.com/users/${userName}/repos?per_page=3`;

  return new Promise((resolve, reject) => {
    api
      .get(url)
      .then(response => resolve(response.data))
      .catch(error => reject(error.response));
  });
}

export async function listCommitsRepository(userName, repo) {
  const url = `https://api.github.com/repos/${userName}/${repo}/commits`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function searchOrgsList(userName) {
  const url = `https://api.github.com/users/${userName}/orgs`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export function followersList(userName) {
  const url = `https://api.github.com/users/${userName}/followers`;

  return new Promise((resolve, reject) => {
    api
      .get(url)
      .then(response => resolve(response.data))
      .catch(error => reject(error.response));
  });
}
