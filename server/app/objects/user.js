'use strict';

exports.User = class {
	constructor(json) {
		this.setJson(json);
	}

	getUserName() {
		return this.user.username;
	}

	getPassword() {
		return this.user.password;
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

	getClientInfo() {
		return this.user.clientInfo;
	}

	hasClientInfo() {
		return true;
	}

	getEmail() {
		return this.user.email;
	}

	getPublicJson() {
		return {
			user: {
				username: this.getUserName(),
				guid: this.getGuid(),
				id: this.getFirebaseId(),
				email: this.getEmail()
			}
		}
	}
}