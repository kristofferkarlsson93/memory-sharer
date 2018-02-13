import config from '../config/config';

export const addUser = (userObject) => {
  const { username, password, email } = userObject;
  if (!username || !password || !email) {
    throw 'Missing value when trying to create user';
  }
  const url = config.baseUrl + '/user';
  const postDate = {
    method: 'POST',
    body: getFormDataToCreateUser(userObject)
  }

}

const getFormDataToCreateUser = (userObject) => {
  const formData = new FormData();
  formData.append('username', userObject.username); 
  formData.append('password', userObject.password); 
  formData.append('email', userObject.email); 
  return formData;
}