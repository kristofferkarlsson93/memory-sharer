'use strict';
const usersRef = require('../configs/dbConfig').usersRef;
const contactsRef = require('../configs/dbConfig').contactsRef;

const addNewUser = async(data) => {
	const returnedData = await usersRef.push(data);
	return returnedData;
}

const addUser = async(userData) => {
	return await usersRef.push(userData);
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
	return new Promise( (resolve, reject) => {
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
	return new Promise( (resolve, reject) => {
		usersRef.orderByChild('guid').equalTo(userGuid).once('value', snapshot => {
			resolve(snapshot.val());
		});
	});
}

const getUserByUsername = (username) => {
	return new Promise( resolve => {
		usersRef.orderByChild('username').equalTo(username).once('value', snapshot => resolve(snapshot.val()));
	})
}


const getContactsForUser = (user) => {
	return new Promise( (resolve, reject) => {
		contactsRef.orderByChild('guid').equalTo(user.getGuid()).once('value', snapshot => {
			resolve(snapshot.val());
		});
	})
}

module.exports = {
	addNewUser,
	addUser,
	getUserByUsername,
	userNameExists,
	userIdExists,
	userGuidExistsAsync,
	getUserByGuid,
}