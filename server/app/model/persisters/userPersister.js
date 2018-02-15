'use strict';
const db = require('../userDb');
const firebaseParser = require('../../helpers/firebaseParser');

const addNewUser = async(user) => {
	const returnedData = await db.addNewUser(user.getJsonForCreatingNewUser());
	return returnedData;
}

const addUser = (guid, username, email, password) => {
	return db.addUser(firebaseParser.parseDataToCreateUser(guid, username, email, password));
}

module.exports = {
	addNewUser,
	addUser
};