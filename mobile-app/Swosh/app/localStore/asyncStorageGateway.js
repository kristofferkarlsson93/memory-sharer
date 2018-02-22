import { AsyncStorage } from 'react-native';

export const saveObject = (key, data) => {
  if (!key || !data) {
    throw 'No key or date supplied to asyncStoreGateway';
  }
  AsyncStorage.setItem(key, JSON.stringify(data));
}

export const getObject = async (key) => {
  try {
    const data = await AsyncStorage.getItem(key);
    return JSON.parse(data);
  } catch (error) {
    return false;
  }
}