const validator = require("email-validator");

module.exports = (email) => validator.validate(email);

//https://www.npmjs.com/package/email-validator