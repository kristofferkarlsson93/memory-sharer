const controllerHelper = require('../../helpers/controllerHelper');
const errors = require('../../constants/errorCodes');
const memoriesGetter = require('../../model/getters/memoriesGetter');
const userGetter = require('../../model/getters/userGetter');
const ruleAssembler = require('../../model/rules/ruleAssembler');
const isKnownError = require('../../helpers/errorHandlingHelper').isKnownError;


const invoke = async(data) => {
  console.log(data);
  const memoryGuid = data.memoryGuid;
  const [client, memory] = await getRelevantData();

  try {
    ruleAssembler.clientShouldBeARecipient(clint, memory);
  } catch (error) {
    if (isKnownError(error)) {
      
    }
  }

  //TODO implement the rule to see if memory has the client in its recipients;
}

const getRelevantData = (clientGuid, memoryGuid) => {
  return Promise.all([userGetter(clientGuid), memoriesGetter(memoryGuid)]);
} 

module.exports = {invoke};