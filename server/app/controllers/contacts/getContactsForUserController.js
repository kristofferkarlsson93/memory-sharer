const contactGetter = require('../../model/getters/contactsGetter');
const userGetter = require('../../model/getters/userGetter');
const ruleAssembler = require('../../model/rules/ruleAssembler');
const controllerHelper = require('../../helpers/controllerHelper');

const invoke = async (data) => {
  const userGuid = data.userGuid;
  const contactGuids = await contactGetter.getContactsByGuid(userGuid);
  
  const users = await getFullyQualifiedContacts(contactGuids);
  return controllerHelper.successResponse(200, users);
}

const getFullyQualifiedContacts = async (contactGuids) => {
  const calls = Array.prototype.map.call(contactGuids, (guid) => userGetter.getUserByGuid(guid) );
  const users = Promise.all(calls);
  return users;

  //return calls;
}

module.exports = {invoke};