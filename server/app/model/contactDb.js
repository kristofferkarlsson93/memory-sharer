'use strict';
const contactsRef = require('../configs/dbConfig').contactsRef;

const getContactsForUser = (user) => {
	console.log('user to fb', user.getGuid());
	return new Promise( (resolve, reject) => {
		contactsRef.orderByKey().equalTo(user.getGuid()).once('value', snapshot => {
			console.log('returned from FB', snapshot.val());
			resolve(snapshot.val());
		});
	})
}

module.exports = {
	getContactsForUser
}