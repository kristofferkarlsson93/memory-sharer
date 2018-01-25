const controllerHelper = require('../../helpers/controllerHelper');
const errors = require('../../constants/errorCodes');
const memoriesGetter = require('../../model/getters/memoriesGetter');
const userGetter = require('../../model/getters/userGetter');
const ruleAssembler = require('../../model/rules/ruleAssembler');
const isKnownError = require('../../helpers/errorHandlingHelper').isKnownError;


const invoke = async(data) => {
  const memoryGuid = data.memoryGuid;
  const clientGuid = data.clientGuid;
  const [client, memory] = await getRelevantData(clientGuid, memoryGuid);
  try {
    ruleAssembler.clientShouldBeARecipient(client, memory);
    ruleAssembler.givenFilePathShouldExist(memory.getFilePath());
  } catch (error) {
    if (isKnownError(error)) {
      console.log(error);
      return controllerHelper.errorResponse(errors.errorStatuses[error], errors.errorCodes[error]);
    } else throw error;
  }
  memory.setSenderName(await userGetter.getUserByGuid(memory.getSenderGuid()).then (user => user.getUserName()));
  return controllerHelper.successResponse(200, memory);
}

const getRelevantData = (clientGuid, memoryGuid) => {
  return Promise.all([userGetter.getUserByGuid(clientGuid), memoriesGetter.getSingleMemoryByGuid(memoryGuid)]);
} 

module.exports = {invoke};