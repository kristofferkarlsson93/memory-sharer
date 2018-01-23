exports.Memory = class {
  constructor(json) {
    this.memory = json;
  }

  getFilePath() {
    return this.memory.getFilePath;
  }

  getMessage() {
    return this.memory.message;
  }

  getRecipients() {
    return this.memory.recipients;
  }
}