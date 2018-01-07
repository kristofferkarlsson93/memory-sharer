'use strict';
const controllerHelper = require('../../helpers/controllerHelper');
const {User} = require('../../objects/user');
const userPersister = require('../../model/userPersister');


const invoke = async (data) => {
	const userName = data.userName;	
	try {
		if (userName) {
			const responseData = await addUser(data);
			return responseData
		} else {
			throw 'INVALID_USERNAME';
		}
	} catch (exception) {
		return handleExceptions(exception);
	}  
}

const addUser = async (data) => {
	const user = new User(data);
	const returnedData = await userPersister.addNewUser(user);
	user.setId(returnedData.key);
	return controllerHelper.successResponse(200, user);
}

const handleExceptions = (exception) => {
	if (exception === 'INVALID_USERNAME') {
		return controllerHelper.errorResponse(400, 'INVALID_USERNAME');
	} else {
		return controllerHelper.errorResponse(400, 'UNKNOWN_ERROR')
	}
}



module.exports = {invoke};