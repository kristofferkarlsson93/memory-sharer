
module.exports = (user, contact) => {
  return user.getContacts().indexOf(contact.getGuid()) === -1;
}