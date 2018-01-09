'use strict';
const usersRef = require('../configs/dbConfig').usersRef;

const addNewUser = async(data) => {
	const returnedData = await usersRef.push(data);
	return returnedData;
}

const userNameExists = async(userName) => {
	let result = false;
	await usersRef.orderByChild("userName").equalTo(userName).once("value", snapshot => {
		const userData = snapshot.val();
		if (userData) {
			result = true;
		}
	});
	return result;
}

const userIdExists = async(userId) => {
	let result = false;
	await usersRef.orderByChild(userId).equalTo(userId).once("value", snapshot => {
		const userData = snapshot.val();
		if (userData) {
			result = true;
		}
	});
	return result;
}

const userGuidExistsAsync = (userGuid) => {
	return new Promise((resolve, reject) => {
		usersRef.orderByChild('guid').equalTo(userGuid).once("value", snapshot => {
			const userData = snapshot.val();
			if (userData) {
				resolve(true);
			} else {
				resolve(false);
			}
		});
	});
}

const getUserByGuid = (userGuid) => {
	return new Promise((resolve, reject) => {
		usersRef.orderByChild('guid').equalTo(userGuid).once('value', snapshot => {
			console.log('val', snapshot.val());
			resolve(snapshot.val());
		});
	});
}

const addContactToUser = (userGuid, contactGuid) => {

}

module.exports = {
	addNewUser,
	userNameExists,
	userIdExists,
	userGuidExistsAsync,
	getUserByGuid
}