
module.exports = (user, contact) => {
  if (contact) {
    return user.getContacts().indexOf(contact.getGuid()) > -1;
  } else {
    return false;
  }
}