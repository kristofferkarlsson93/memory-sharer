const controllerHelper = require('../../helpers/controllerHelper');
const errors = require('../../constants/errorCodes');
const userGetter = require('../../model/getters/userGetter');
const ruleAssembler = require('../../model/rules/ruleAssembler');
const isKnownError = require('../../helpers/errorHandlingHelper').isKnownError;
const authHelper = require('../../helpers/authHelper');



const invoke = async(loginData) => {
  const {username, password, clientId} = loginData;
  if (!username || !password || !clientId) {
    return controllerHelper.errorResponse(
      errors.errorStatuses.MISSING_PARAMETER, 
      error.errorStatuses.MISSING_PARAMETER
    );
  }
  const user = await userGetter.getUserByUsername(username);
  try {
    ruleAssembler.userShouldExist(user);
    ruleAssembler.passwordsShouldMatch(password, user.getPassword());
    ruleAssembler.clientIdShouldBeKnown(clientId);
  } catch (error) {
    if (isKnownError(error)) {
      return controllerHelper.errorResponse(errors.errorStatuses[error], errors.errorCodes[error]);
    } else throw error;
  }
  const jwt = await authHelper.getTokenForUser(user.getGuid());
  return controllerHelper.successResponse(200, {token: jwt});

}

module.exports = {invoke};