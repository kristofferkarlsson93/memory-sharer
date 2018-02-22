import config from '../config/config';

export const addUserToServer = (userObject) => {
  const { username, password, email } = userObject;
  if (!username || !password || !email) {
    throw 'Missing value when trying to create user';
  }
  const url = config.baseUrl + '/user/';
  const postData = {
    method: 'POST',
    headers: getPostHeaders(),
    body: JSON.stringify({
      username, 
      password,
      email,
      clientId: config.clientId
    })
  }
  return fetch(url, postData)
    .then(async response => {
      const json = await response.json()
      if (!response.ok) {
        throw json.error.code;
      } else return json;
    });
  }

export const loginUserOnAPIByUsername = async(user) => {
  const { username, password } = user;
  if (!username || !password) {
    throw 'missing parameter username or password when trying to login to api';
  }
  const url = config.baseUrl + '/auth/login';
  const postData = {
    method: 'POST',
    headers: getPostHeaders(),
    body: JSON.stringify({
      username,
      password,
      clientId: config.clientId
    })
  };
  const response = await fetch(url, postData);
  const json = response.json();
  if (!response.ok) {
    throw json.error.code;
  }
  return json;
}

  const getPostHeaders = () => {
    return ({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });
  }