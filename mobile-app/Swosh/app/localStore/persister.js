import { encryptString } from '../utils/passwordCryptator';
import { saveObject } from './asyncStorageGateway';

export const storeUser = async(userObject) => {
  if (!userObject.username || !userObject.password) {
    throw 'Password or username missing when trying to persist user';
  }
  const password = await encryptString(userObject.password);
  userObject.password = password;
  saveObject('user', userObject);
}