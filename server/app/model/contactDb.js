'use strict';
const contactsRef = require('../configs/dbConfig').contactsRef;

const getContactsByGuid = (userGuid) => {
	return new Promise( (resolve, reject) => {
		contactsRef.orderByKey().equalTo(userGuid).once('value', snapshot => {
			resolve(snapshot.val());
		});
	});
}

const addContactToUser = (parsedData) => {
	const userInContacts = contactsRef.child(parsedData.userInfo.userGuid);
	userInContacts.update(parsedData.contactInfo);
}

module.exports = {
	getContactsByGuid,
	addContactToUser
}