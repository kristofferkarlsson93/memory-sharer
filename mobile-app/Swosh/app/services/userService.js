import config from '../config/config';

export const addUserToServer = (userObject) => {
  const { username, password, email } = userObject;
  if (!username || !password || !email) {
    throw 'Missing value when trying to create user';
  }
  const url = config.baseUrl + '/user/';
  const postData = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
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
    })
  }