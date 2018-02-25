const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const digits = '0123456789';
const symbols = [alpha, digits];

module.exports = (username) => {
  let guid = username;
  for (let i = 0; i <= 10; i++ ) {
    const firstLevel = getRandomInt(2)
    const secondLevel = getRandomInt(symbols[firstLevel].length-1);
    guid += symbols[firstLevel][secondLevel];
  }
  return guid;
}

const  getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}