const contactGetter = require('../../model/getters/contactsGetter');
const userGetter = require('../../model/getters/userGetter');
const ruleAssembler = require('../../model/rules/ruleAssembler');
const controllerHelper = require('../../helpers/controllerHelper');

const invoke = async (data) => {
  const userGuid = data.userGuid;
  const contactGuids = await contactGetter.getContactsByGuid(userGuid);
  const contacts = await getFullyQualifiedContacts(contactGuids);
  return controllerHelper.successResponse(200, contacts);
}

const getFullyQualifiedContacts = (contactGuids) => {
  return Promise.all(contactGuids.map(guid => userGetter.getUserByGuid(guid)));
}

module.exports = {invoke};