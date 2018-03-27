const userGetter = require('../../model/getters/userGetter');
const contactGetter = require('../../model/getters/contactsGetter');
const ruleAssembler = require('../../model/rules/ruleAssembler');
const isKnownError = require('../../helpers/errorHandlingHelper').isKnownError;
const errors = require('../../constants/errorCodes');
const controllerHelper = require('../../helpers/controllerHelper');

const invoke = async (data) => {
  console.log(data);
  if (!data.contactGuid || !data.guid) {
    return controllerHelper.errorResponse(errors.errorStatuses.MISSING_PARAMETER, errors.errorCodes.MISSING_PARAMETER);
  }
  const [user, contact, userContacts] = await Promise.all([
    userGetter.getUserByGuid(data.guid), 
    userGetter.getUserByGuid(data.contactGuid),
    contactGetter.getContactsByGuid(data.guid)

  ]); 
  user.setContacts(userContacts);
  try {
    ruleAssembler.userAndContactShouldExist(user, contact);
    ruleAssembler.userShouldKnowOfContact(user, contact)
    console.log('bu');
  } catch (error) {
    if (isKnownError(error)) {
    console.log('bä', error);      
      return controllerHelper.errorResponse(errors.errorStatuses[error], errors.errorCodes[error])
    } else throw error;
  }
  return controllerHelper.successResponse(200, contact.getPublicJson());
}



module.exports = {invoke};