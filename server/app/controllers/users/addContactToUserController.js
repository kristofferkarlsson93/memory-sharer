const controllerHelper = require('../../helpers/controllerHelper');
const userGetter = require('../../model/userGetter');
const userPersister = require('../../model/userPersister');
const errors = require('../../constants/errorCodes');
const rule = require('../../model/rules/userRules');

const invoke = async(data) => {

	console.log('missing parameter', dataMissingParameter(data));
	if (dataMissingParameter(data)) {
		return controllerHelper.errorResponse(400, errors.MISSING_PARAMETER);
	}

	const evaluation = await evaluateThatUserAndContactExists(data);
	console.log('eval', evaluation);
	const userExist = evaluation[0];
	const contactExists = evaluation[1];

	try {
		if (!userExist) {
			throw errors.USER_DOES_NOT_EXISTS;
		}
		if (!contactExists) {
			throw CONTACT_DOES_NOT_EXISTS
		}
	} catch (exception) {
		return controllerHelper.errorResponse(400, exception);
	}
	console.log('everythingOk');


	return 'temp';


}

const evaluateThatUserAndContactExists = (data) => {
	return Promise.all([
		rule.userShouldExist(data.userGuid),
		rule.userShouldExist(data.contactGuid)
	]);
}

const dataMissingParameter = (data) => {
	return !(data.userGuid && data.contactGuid);
}

module.exports = {
	invoke
}