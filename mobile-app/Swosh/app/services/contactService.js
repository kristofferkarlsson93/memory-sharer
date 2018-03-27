import config from '../config/config';

export const getContactsForUser = async(token) => {
  if (!token) {
    throw 'Missing token when trying to get contacts';
  }
  console.log('token', token);
  const url = config.baseUrl + '/contacts';
  const fetchData = {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + token
    }
  }
  const response = await fetch(url, fetchData);
  const json = await response.json();
  console.log(json)
  return json;
}

export const getContact = async(contactGuid, token) => {
  console.log('getting', contactGuid);
  if (!token || !contactGuid) {
    throw 'Missing parameter when trying to get contacts';
  }
  const url = config.baseUrl + '/contact/' + contactGuid;
  const fetchData = {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + token
    }
  }
  const response = await fetch(url, fetchData);
  const json = await response.json();
  return json;
}