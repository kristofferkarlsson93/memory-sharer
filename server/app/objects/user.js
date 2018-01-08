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

	getJsonForCreatingNewUser() {
		return {
			guid: this.getGuid(),
			userName: this.getUserName()
		}
	}
}