'use strict';

exports.User = class {
	constructor(json) {
		this.setJson(json);
	}

	getUserName() {
		return this.user.userName;
	}

	getGuid() {
		return this.user.guid;
	}

	setJson(json) {
		this.user = json;
	}

	getJson() {
		return this.user;
	}

	setId(id) {
		this.user.id = id;
	}

	getFirebaseId() {
		return this.user.id;
	}

	setContacts(contactGuidArray) {
		this.user.contacts = contactGuidArray;
	}

	getContacts() {
		return this.user.contacts;
	}

	getJsonForCreatingNewUser() {
		return {
			guid: this.getGuid(),
			userName: this.getUserName()
		}
	}
}