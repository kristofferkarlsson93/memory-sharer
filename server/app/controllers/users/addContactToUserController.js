const controllerHelper = require('../../helpers/controllerHelper');
const userGetter = require('../../model/userGetter');

const invoke = (data) => {
    const userId = data.userId;
    const contactId = data.contactId;
    
    const userIDExists = userGetter.userIdExistsInDb(userId);
}

module.exports = {
    invoke
}