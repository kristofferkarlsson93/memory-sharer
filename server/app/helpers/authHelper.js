const jwt = require('jsonwebtoken');
const authConfig = require('../../private/authConfig');
const errors = require('../constants/errorCodes');

const getTokenForUser = (userGuid) => {
  if (!userGuid) {
    throw 'No userGuid given when creating jwt'
  };
  return jwt.sign({
    guid: userGuid
  }, authConfig.key, {
    expiresIn: authConfig.expiresAfter
  });
}

const verifyToken = (request, response, next) => {
  const bearerHeader = request.headers['authorization'];
  if (!bearerHeader) {
    response.status(errors.errorStatuses.UNAUTHORIZED).send({error: {code: errors.errorCodes.UNAUTHORIZED}});
    return;
  }
  const token = bearerHeader.split(' ')[1];
  request.token = token;
  try {
   const authData = jwt.verify(token, authConfig.key);
   request.body.guid = authData.guid;
   next();
  } catch (err) {
    response.status(errors.errorStatuses.UNAUTHORIZED).send({error: {code: errors.errorCodes.UNAUTHORIZED}});    
  }
}

module.exports = {
  getTokenForUser,
  verifyToken
}

//https://www.npmjs.com/package/jsonwebtoken