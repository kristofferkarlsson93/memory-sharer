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

export const getMemoryImage = async(token, ) => {

}