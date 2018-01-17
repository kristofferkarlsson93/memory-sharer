const fs = require('fs');

module.exports = (filePath) => {
  return fs.existsSync(filePath);
}