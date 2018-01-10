"use strict";

const controllerHelper = require('../../helpers/controllerHelper');
const userGetter = require('../../model/userGetter');
const userPersister = require('../../model/userPersister');
const errors = require('../../constants/errorCodes');
const ruleAssembler = require('../../model/rules/ruleAssembler.js');
const isKnownError = require('../../helpers/errorHandlingHelper').isKnownError;


const invoke = async(data) => {

	if (dataMissingParameter(data)) {
		return controllerHelper.errorResponse(400, errors.MISSING_PARAMETER);
	}

	const users = await getWantedUsers(data.userGuid, data.contactGuid);
	const user = users[0];
	const contact = users[1];

	try {
		ruleAssembler.userAndContactShouldExist(user, contact);
		ruleAssembler.usersShouldNotBeConnectedWhenAddingContact(user, contact);
	} catch (error) {
		if (isKnownError(error)) {
			return controllerHelper.errorResponse(errors.errorStatuses.error, errors.errorCodes.error);
		} else throw new Error(error);
	}
	userPersister.addContactToUser(user, contact)


}

const getWantedUsers = (activeUsersGuid, contactToAddsGuid) => {
	return Promise.all([
		userGetter.getUserByGuid(activeUsersGuid),
		userGetter.getUserByGuid(contactToAddsGuid)
	])
}

const dataMissingParameter = (data) => {
	return !(data.userGuid && data.contactGuid);
}

module.exports = {
	invoke
}