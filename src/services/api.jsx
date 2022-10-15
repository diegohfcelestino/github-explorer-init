import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.github.com/users/"
});

export async function handleRepositoryList() {
  const auth = localStorage.getItem("user");
  const url = `${api}/${auth}/repos?per_page=1`;

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
  const url = `${api}/${auth}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function searchUsersList(userName) {
  const url = `${api}/${userName}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function repositoryListUsers(userName) {
  const url = `${api}/${userName}/repos?per_page=1`;

  return new Promise((resolve, reject) => {
    api
      .get(url)
      .then(response => resolve(response.data))
      .catch(error => reject(error.response));
  });
}

export async function listCommitsRepository(userName, repo) {
  const url = `${api}/${userName}/${repo}/commits`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function searchOrgsList(userName) {
  const url = `${api}/${userName}/orgs`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export function followersList(userName) {
  const url = `${api}/${userName}/followers`;

  return new Promise((resolve, reject) => {
    api
      .get(url)
      .then(response => resolve(response.data))
      .catch(error => reject(error.response));
  });
}
