'use strict';
const contactsRef = require('../configs/dbConfig').contactsRef;

const getContactsForUser = (user) => {
	return new Promise( (resolve, reject) => {
		contactsRef.orderByKey().equalTo(user.getGuid()).once('value', snapshot => {
			resolve(snapshot.val());
		});
	});
}

const addContactToUser = (parsedData) => {
	const userInContacts = contactsRef.child(parsedData.userInfo.userGuid);
	userInContacts.update(parsedData.contactInfo);
}

module.exports = {
	getContactsForUser,
	addContactToUser
}