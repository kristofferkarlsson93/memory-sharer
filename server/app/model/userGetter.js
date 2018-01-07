const db = require('../model/userDb');

const userIdExistsInDb = async (id) => {
	const guidExist = await db.userIdExists(id);
	if (guidExist) {
		return true;
	} 
	return false;
} 

const userNameExistsInDb = async (userName) => {
	const userNameExists = await db.userNameExists(userName);
	if (userNameExists) {
		return true;
	}
	return false;
}

module.exports = {
		userIdExistsInDb,
		userNameExistsInDb
}