'use strict';
const controllerHelper = require('../../helpers/controllerHelper');
const {User} = require('../../objects/user');
const userPersister = require('../../model/persisters/userPersister');
const userGetter = require('../../model/getters/userGetter');


const invoke = async (data) => {
	const user = new User(data);
	try {
		if (user.getUserName && user.getGuid) {
			const evaluation = await _evaluateUserExistence(user);
			const userNameExists = evaluation[0];
			const guidExists = evaluation[1];

			if (userNameExists) {
				throw 'USER_NAME_ALREADY_TAKEN'
			}
			if (guidExists || user.getGuid().length < 10) {
				throw 'INVALID_GUID';
			}
		} else {
			throw 'INVALID_USER_DATA';
		} 
	} catch (exception) {
		return _handleExceptions(exception);
	}
	const responseData = _addUser(user);
	return responseData;
}

const _evaluateUserExistence = (user) => {
	return Promise.all([
		userGetter.userNameExistsInDb(user.getUserName()), 
		userGetter.userIdExistsInDb(user.getGuid())
	]);
}

const _addUser = async (user) => {
	const returnedData = await userPersister.addNewUser(user);
	user.setId(returnedData.key);
	return controllerHelper.successResponse(200, user);
}

const _handleExceptions = (exception) => {
	return controllerHelper.errorResponse(400, exception);
}



module.exports = {invoke};