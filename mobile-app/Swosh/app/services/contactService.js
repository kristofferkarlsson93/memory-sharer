import config from '../config/config';

export const getContactsForUser = async(token) => {
  if (!token) {
    throw 'Missing token when trying to get contacts';
  }
  const url = config.baseUrl + '/contacts';
  const fetchData = {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + token
    }
  }
  const response = await fetch(url, fetchData);
  const json = await response.json();
  console.log('contacts', json);
  return json;
}