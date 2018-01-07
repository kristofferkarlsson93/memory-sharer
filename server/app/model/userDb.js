'use strict';
const usersRef = require('../configs/dbConfig').usersRef;

const addNewUser = async (data) => {
	const returnedData = await usersRef.push(data);
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

const userIdExists = async (userId) => {
	let result = false;
	await usersRef.orderByChild(userId).equalTo(userId).once("value", snapshot => {
		const userData = snapshot.val();
		if (userData){
			result = true;
		}
	});
	return result;
}

module.exports = {
	addNewUser,
	userNameExists,
	userIdExists
}