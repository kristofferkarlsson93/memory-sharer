const bcrypt = require('bcrypt');
const passwordConfig = require('../configs/passwordConfig');

const hashPassword = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(passwordConfig.saltRounds));
}

const compareHashedAndPlainPassword = (hashedPassword, plainPassword) => {
  return bcrypt.compareSync(plainPassword, hashedPassword);
}

module.exports = {
  hashPassword,
  compareHashedAndPlainPassword,
}

// https://www.npmjs.com/package/bcrypt