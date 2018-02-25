const generalConfig = require('../configs/generalConfig');

exports.Memory = class {
  constructor(json) {
    this.memory = json;
  }

  getFilePath() {
    return this.memory.filePath;
  }

  getGuid() {
    return this.memory.guid;
  }

  getMessage() {
    return this.memory.message;
  }

  getRecipients() {
    return this.memory.recipients;
  }

  getSenderGuid() {
    return this.memory.sender;
  }

  setSenderName(name) {
    this.memory.senderName = name;
  }

  getSenderName() {
    return this.memory.senderAsUser;
  }
}