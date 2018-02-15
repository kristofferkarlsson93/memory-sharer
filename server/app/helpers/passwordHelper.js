const bcrypt = require('bcrypt');
const passwordConfig = require('../configs/passwordConfig');

const hashPassword = async (password) => {
  return await bcrypt.hash(password, passwordConfig.saltRounds).then(hashedPassword => hashedPassword);
}



const compareHashedAndPlainPassword = (hashedPassword, plainPassword)=> {
  return bcrypt.compare(plainPassword, hash, (error, result) => result);
}

module.exports = {
  hashPassword,
  compareHashedAndPlainPassword,
}

// https://www.npmjs.com/package/bcrypt