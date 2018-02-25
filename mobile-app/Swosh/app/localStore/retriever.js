import { getObject } from './asyncStorageGateway';
import { decryptString } from '../utils/passwordCryptator';


export const retrieveUser = async() => {
  const user = await getObject('user');
  if (user) {
    user.password = await decryptString(user.password);
    return user;
  } else return false;
}