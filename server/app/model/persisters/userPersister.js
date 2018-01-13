'use strict';
const db = require('../userDb');
const firebaseParser = require('../../helpers/firebaseParser');

const addNewUser = async(user) => {
	const returnedData = await db.addNewUser(user.getJsonForCreatingNewUser());
	return returnedData;
}

const addContactToUser = (user, contact) => {
	const data = firebaseParser.parseForAddingContactToUser(user, contact);
	db.addContactToUser(data);
}

module.exports = {
	addNewUser,
	addContactToUser
};