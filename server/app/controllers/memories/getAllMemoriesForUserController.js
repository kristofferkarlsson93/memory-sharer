const memoriesGetter = require('../../model/getters/memoriesGetter');
const ruleAssembler = require('../../model/rules/ruleAssembler');
const isKnownError = require('../../helpers/errorHandlingHelper').isKnownError;
const errors = require('../../constants/errorCodes');
const controllerHelper = require('../../helpers/controllerHelper');

const invoke = async(data) => {

  if (!data.guid) {
    return controllerHelper.errorResponse(errors.errorStatuses.MISSING_PARAMETER, errors.errorCodes.MISSING_PARAMETER);
  }
  const memories = await memoriesGetter.getAllMemoriesForUser(data.guid);
  return controllerHelper.successResponse(200, memories);
}

module.exports = {invoke};