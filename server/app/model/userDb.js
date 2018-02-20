'use strict';
const usersRef = require('../configs/dbConfig').usersRef;
const contactsRef = require('../configs/dbConfig').contactsRef;

const addUser = async(userData) => {
	return await usersRef.push(userData);
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
	addUser,
	getUserByUsername,
	userNameExists,
	userIdExists,
	userGuidExistsAsync,
	getUserByGuid,
}