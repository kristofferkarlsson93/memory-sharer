import config from '../config/config';
import { isKnownError } from '../utils/errorUtils';

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

export const postMemoryToServer = (memory) => {
  const data = new FormData();
  data.append('recipients', memory.recipients);
  data.append('message', memory.message);
  data.append('memory', {
    uri: memory.image,
    type: 'image/jpeg',
  });
  fetch(config.baseUrl, {
    method: 'post',
    body: data
  }).then(res => {
    console.log(res)
  });

}