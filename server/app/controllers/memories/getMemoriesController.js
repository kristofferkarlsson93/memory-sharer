const controllerHelper = require('../../helpers/controllerHelper');
const errors = require('../../constants/errorCodes');
const memoriesGetter = require('../../model/getters/memoriesGetter');

const invoke = async(data) => {
  console.log(data);
  const memoryGuid = data.memoryGuid;
  const memory = await memoriesGetter.getSingleMemoryByGuid(memoryGuid);
  console.log('memory', memory);

  //TODO implement the rule to see if memory has the client in its recipients;
}

module.exports = {invoke};