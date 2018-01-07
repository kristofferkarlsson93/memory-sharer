'use strict';
const db = require('./userDb');

const addNewUser = async (user) => {
	const returnedData = await db.addNewUser(user.getJsonForCreatingNewUser());
	return returnedData;
}

module.exports = {
	addNewUser
};