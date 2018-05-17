import config from '../config/config';
import { isKnownError } from '../utils/errorUtils';
import getRandomString from '../utils/randomString';

export const getAllMemories = async(token) => {
  if (!token) {
    throw 'Missing token when trying to get memories';
  }
  const url = config.baseUrl + '/memories/sent';
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

export const postMemoryToServer = (memory, token) => {
  
  const url = config.baseUrl + '/memory';
  const data = new FormData();
  console.log('memory', memory);
  data.append('recipients', memory.recipients);
  data.append('message', memory.message);
  data.append('memory', {
    uri: memory.image,
    type: 'image/jpeg',
    name: getRandomString(config.fileNameLength)
  });
  fetch(url, {
    method: 'POST',
    body: data,
    headers: {
      "content-type": "multipart/form-data",
      'Authorization': 'Bearer ' + token,
    }
  }).then(res => res.json()).then(json => console.log(json));

}