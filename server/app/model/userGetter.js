const db = require('../model/userDb');
const fireBaseParser = require('../helpers/firebaseParser');

const userIdExistsInDb = async(id) => {
	const guidExist = await db.userIdExists(id);
	if (guidExist) {
		return true;
	}
	return false;
}

const userNameExistsInDb = async(userName) => {
	const userNameExists = await db.userNameExists(userName);
	if (userNameExists) {
		return true;
	}
	return false;
}

const userGuidExists = (userGuid) => {
	return db.userGuidExistsAsync(userGuid);
}

const getUserByGuid = (userGuid) => {
	return db.getUserByGuid(userGuid).then( (userData) => {
		return userData ? fireBaseParser.parseDataToUser(userData) : "";
	});
}


module.exports = {
	userIdExistsInDb,
	userNameExistsInDb,
	userGuidExists,
	getUserByGuid
}