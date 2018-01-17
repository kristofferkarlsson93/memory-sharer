const ruleAssembler = require('../../model/rules/ruleAssembler');


const invoke = (bodyData, fileData) => {
  /**
   * Check if the file exists at wanted location. 
   * Check that recipients exists and can recive.
   * 
   * Return the memorydata, like {
   *  id
   *  message
   *  filename
   *  path?
   * }
   * 
   * ping the recipients servers so they know that stuff is awailable
   * 
   * */

   console.log(fileData);
   console.log('body', bodyData);
   try {
     ruleAssembler.givenFilePathShouldExist(fileData.path);
   } catch(error) {
     console.log('ERROR', error);
   }
  
}

module.exports = {invoke};