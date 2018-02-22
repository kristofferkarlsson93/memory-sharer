import { encrypt, decrypt } from 'react-native-simple-encryption';
import cryptoConfig from '../../private/cryptoConfig';

export const encryptString = async(password) => {
  return await new Promise(resolve => resolve(encrypt(cryptoConfig.secretString, password)));
}

export const decryptString = async(string) => {
  return await new Promise(resolve => resolve(decrypt(cryptoConfig.secretString, string)));
}
//https://www.npmjs.com/package/react-native-simple-encryption