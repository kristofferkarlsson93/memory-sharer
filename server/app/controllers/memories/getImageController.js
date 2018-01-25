const errors = require('../../constants/errorCodes');
const controllerHelper = require('../../helpers/controllerHelper');
const ruleAssembler = require('../../model/rules/ruleAssembler');
const isKnownError = require('../../helpers/errorHandlingHelper').isKnownError;
const generalConfig = require('../../configs/generalConfig');


const invoke = (filePath) => {
  try {
    ruleAssembler.givenFilePathShouldExist(filePath);
  } catch(error) {
    if (isKnownError(error)) {
      return controllerHelper.errorResponse(400, errors.errorCodes[error]);
    } else throw error;
  }
  return controllerHelper.successResponse(200, generalConfig.rootPath + filePath);
}

module.exports = {invoke};
