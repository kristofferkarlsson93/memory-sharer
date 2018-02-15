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
  } = postData;

  if (!username || !password || ! email) {
    return controllerHelper.errorResponse(errors.errorStatuses.MISSING_PARAMETER, errors.errorCodes.MISSING_PARAMETER);
  }
  
  const possibleEarlierUser = await userGetter.getUserByUsername(username);

  try {
    ruleAssembler.usernameCanNotBeOccupied(possibleEarlierUser);
    ruleAssembler.emailShouldBeValid(email);
    ruleAssembler.passwordShouldBeValid(password);
  } catch (error) {
    if (isKnownError(error)) {
      return controllerHelper.errorResponse(errors.errorStatuses[error], errors.errorCodes[error]);
    } else throw error;
  }
  const hashedPassword = await passwordHelper.hashPassword(password);
  const guid = guidCreator();
  userPersister.addUser(guid, username, email, hashedPassword);
  console.log('sending stuff back', guid);
  return controllerHelper.successResponse(200, {guid: guid});


}

module.exports = {invoke};