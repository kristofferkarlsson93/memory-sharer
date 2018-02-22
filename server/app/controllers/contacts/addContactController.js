"use strict";
const controllerHelper = require('../../helpers/controllerHelper');
const userGetter = require('../../model/getters/userGetter');
const contactGetter = require('../../model/getters/contactsGetter')
const userPersister = require('../../model/persisters/userPersister');
const contactsPersister = require('../../model/persisters/contactsPersister');
const errors = require('../../constants/errorCodes');
const ruleAssembler = require('../../model/rules/ruleAssembler.js');
const isKnownError = require('../../helpers/errorHandlingHelper').isKnownError;


const invoke = async(data) => {

	if (dataMissingParameter(data)) {
		return controllerHelper.errorResponse(errors.errorStatuses.MISSING_PARAMETER, errors.errorCodes.MISSING_PARAMETER);
	}

	const [user, contact] = await getWantedUsers(data.guid, data.contactGuid);

	try {
		ruleAssembler.userAndContactShouldExist(user, contact);
		const usersContacts = await contactGetter.getContactsByGuid(user.getGuid());
		user.setContacts(usersContacts);
		ruleAssembler.usersShouldNotKnowOfNewContact(user, contact);
	} catch (error) {
		if (isKnownError(error)) {
			return controllerHelper.errorResponse(errors.errorStatuses[error], errors.errorCodes[error]);
		} else throw new Error(error);
	}

	const contactList = user.getContacts();
	contactList.push(contact.getGuid());	
	
	await contactsPersister.addContactToUser(user, contact);
	return controllerHelper.successResponse(200, {contactList});
}

const getWantedUsers = (activeUsersGuid, contactToAddsGuid) => {
	return Promise.all([
		userGetter.getUserByGuid(activeUsersGuid),
		userGetter.getUserByGuid(contactToAddsGuid)
	])
}

const dataMissingParameter = (data) => {
	console.log(data);
	return !(data.guid && data.contactGuid);
}

module.exports = {
	invoke
}