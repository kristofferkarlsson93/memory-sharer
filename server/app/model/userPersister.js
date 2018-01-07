'use strict';
const db = require('./userDb');

const addNewUser = async (user) => {
	const userNameExists = await db.userNameExists(user.getUserName());
	if (userNameExists) {
		throw 'INVALID_USERNAME';
	} else {
		const returnedData = await db.addNewUser(user);
		return returnedData;
	}
}

module.exports = {
	addNewUser
};