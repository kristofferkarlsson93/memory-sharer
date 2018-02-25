const userGetter = require('../../model/getters/userGetter');
const userPersister = require('../../model/persisters/userPersister');
const ruleAssembler = require('../../model/rules/ruleAssembler');
const isKnownError = require('../../helpers/errorHandlingHelper').isKnownError;
const errors = require('../../constants/errorCodes');
const controllerHelper = require('../../helpers/controllerHelper');
const passwordHelper = require('../../helpers/passwordHelper');
const guidCreator = require('../../helpers/guidCreator');

const invoke = async (postData) => {
  const { 
    username,
    password,
    email,
    clientId
  } = postData;

  if (!username || !password || !email || !clientId) {
    return controllerHelper.errorResponse(errors.errorStatuses.MISSING_PARAMETER, errors.errorCodes.MISSING_PARAMETER);
  }
  
  const possibleEarlierUser = await userGetter.getUserByUsername(username);

  try {
    ruleAssembler.usernameCanNotBeOccupied(possibleEarlierUser);
    ruleAssembler.emailShouldBeValid(email);
    ruleAssembler.passwordShouldBeValid(password);
    ruleAssembler.clientIdShouldBeKnown(clientId);
  } catch (error) {
    if (isKnownError(error)) {
      return controllerHelper.errorResponse(errors.errorStatuses[error], errors.errorCodes[error]);
    } else throw error;
  }
  const hashedPassword = passwordHelper.hashPassword(password);
  const guid = guidCreator(username);
  userPersister.addUser(guid, username, email, hashedPassword);
  return controllerHelper.successResponse(200, {guid: guid});


}

module.exports = {invoke};