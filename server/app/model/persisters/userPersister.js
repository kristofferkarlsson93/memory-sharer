'use strict';
const db = require('../userDb');
const firebaseParser = require('../../helpers/firebaseParser');

const addUser = (guid, username, email, password) => {
	return db.addUser(firebaseParser.parseDataToCreateUser(guid, username, email, password));
}

module.exports = {
	addUser
};