'use strict';
const db = require('../userDb');
const firebaseParser = require('../../helpers/firebaseParser');

const addNewUser = async(user) => {
	const returnedData = await db.addNewUser(user.getJsonForCreatingNewUser());
	return returnedData;
}

module.exports = {
	addNewUser,
};