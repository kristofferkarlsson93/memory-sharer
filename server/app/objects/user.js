'use strict';

exports.User = class {
    constructor(json) {
        this.setJson(json);
    }

    getUserName() {
        return this.json.userName;
    }

    setJson(json) {
        this.json = json;
    }

    setId(id) {
        this.json.id = id;
    }
}
