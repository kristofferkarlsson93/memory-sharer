import config from '../config/config';

export const addUser = (userObject) => {
  const { username, password, email } = userObject;
  if (!username || !password || !email) {
    throw 'Missing value when trying to create user';
  }
  console.log('USER OBJEKT', userObject);
  const url = config.baseUrl + '/user/';
  const postData = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userObject)
  }
  console.log('sending', userObject);
  return fetch(url, postData)
    .then(async response => {
      const json = await response.json()
      if (!response.ok) {
        throw json.error.code;
      } else return json;
    })
  }

const getFormDataToCreateUser = (userObject) => {
  const formData = new FormData();
  formData.append('username', userObject.username); 
  formData.append('password', userObject.password); 
  formData.append('email', userObject.email); 
  return formData;
}