'use strict';
const usersRef = require('../configs/dbConfig').usersRef;

const addNewUser = async (user) => {
	const returnedData = await usersRef.push(user.json);
	return returnedData;
}

const userNameExists = async (userName) => {
	let result = false;
	await usersRef.orderByChild("userName").equalTo(userName).once("value", snapshot => {
		const userData = snapshot.val();
		if (userData){
			result = true;
		}
	});
	return result;
}

module.exports = {
	addNewUser,
	userNameExists
}