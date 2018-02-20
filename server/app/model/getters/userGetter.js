const db = require('../userDb');
const fireBaseParser = require('../../helpers/firebaseParser');

const getUserByGuid = (userGuid) => {
	return db.getUserByGuid(userGuid).then( (userData) => {
		return userData ? fireBaseParser.parseDataToUser(userData) : "";
	});
}

const getUserByUsername = (username) => {
	return db.getUserByUsername(username).then(userData => userData ? fireBaseParser.parseDataToUser(userData) : '')
}


module.exports = {
	getUserByGuid,
	getUserByUsername
}