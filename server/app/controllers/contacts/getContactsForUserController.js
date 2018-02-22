const contactGetter = require('../../model/getters/contactsGetter');
const userGetter = require('../../model/getters/userGetter');
const ruleAssembler = require('../../model/rules/ruleAssembler');
const controllerHelper = require('../../helpers/controllerHelper');

const invoke = async (data) => {
  const userGuid = data.guid;
  const contactGuids = await contactGetter.getContactsByGuid(userGuid);
  const contacts = await getFullyQualifiedContacts(contactGuids);
  const returnableContacts = contacts.map(contact => contact.getPublicJson())
  return controllerHelper.successResponse(200, returnableContacts);
}

const getFullyQualifiedContacts = (contactGuids) => {
  return Promise.all(contactGuids.map(guid => userGetter.getUserByGuid(guid)));
}

module.exports = {invoke};