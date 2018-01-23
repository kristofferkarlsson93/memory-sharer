module.exports = (clientGuid, memory) => {
  return memory.getRecipients().indexOf(clientGuid) > -1;
}