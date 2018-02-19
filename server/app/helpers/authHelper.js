const jwt = require('jsonwebtoken');
const authConfig = require('../../private/authConfig');

const getJwtForUser = (userGuid) => {
  if (!userGuid) {
    throw 'No userGuid given when creating jwt'
  };
  return jwt.sign({
    guid: userGuid
  }, authConfig.key, {
    expiresIn: authConfig.expiresAfter
  });
}

module.exports = {
  getJwtForUser
}

//https://www.npmjs.com/package/jsonwebtoken