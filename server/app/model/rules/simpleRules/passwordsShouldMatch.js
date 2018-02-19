const passwordHelper = require('../../../helpers/passwordHelper');

module.exports = (receivedPassword, storedPassword) => {
  return passwordHelper.compareHashedAndPlainPassword(storedPassword, receivedPassword);
}