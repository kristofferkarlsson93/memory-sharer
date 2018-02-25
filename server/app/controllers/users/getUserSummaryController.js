const userGetter = require('../../model/getters/userGetter');
const contactsGetter = require('../../model/getters/contactsGetter');
const memoriesGetter = require('../../model/getters/memoriesGetter');
const ruleAssembler = require('../../model/rules/ruleAssembler');
const isKnownError = require('../../helpers/errorHandlingHelper').isKnownError;
const errors = require('../../constants/errorCodes');
const controllerHelper = require('../../helpers/controllerHelper');


const invoke = async(data) => {
  if (!data.guid) {
    return controllerHelper.errorResponse(errors.errorStatuses.MISSING_PARAMETER, errors.errorCodes.MISSING_PARAMETER);
  }
  const [memories, contacts, user] = await Promise.all([
    memoriesGetter.getAllMemoriesForUser(data.guid).then(memories => memories.map(memory => memory.getGuid())),
    contactsGetter.getContactsByGuid(data.guid),
    userGetter.getUserByGuid(data.guid) 
  ]);
  return controllerHelper.successResponse(200, buildResponse(memories, contacts, user));

  //user
  //contacts
  //memories
}

const buildResponse = (memories, contacts, user) => {
  return {
    user: user.getPublicJson().user,
    memories: memories,
    contacts: contacts

  }
}

module.exports = {invoke};