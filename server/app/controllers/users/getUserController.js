const userGetter = require('../../model/getters/userGetter');
const ruleAssembler = require('../../model/rules/ruleAssembler');
const isKnownError = require('../../helpers/errorHandlingHelper').isKnownError;
const errors = require('../../constants/errorCodes');
const controllerHelper = require('../../helpers/controllerHelper');

const invoke = async (data) => {
  const userGuid = data.userGuid;
  const user = await userGetter.getUserByGuid(userGuid); 
  try {
    ruleAssembler.userShouldExist(user);
  } catch (error) {
    if (isKnownError(error)) {
      return controllerHelper.errorResponse(errors.errorStatuses[error], errors.errorCodes[error])
    }
  }
  return controllerHelper.successResponse(200, user);
}



module.exports = {invoke};