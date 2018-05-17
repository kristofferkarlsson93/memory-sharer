const ALPHA = 'ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz';
const DIGITS = '0123456789';
const symbols = [ALPHA, DIGITS]

export default (length) => {
  let string = '';
  let firstLevel = '';
  let secondLevel = '';
  for (let i = 0; i <= length; i++ ) {
    firstLevel = getRandomInt(2)
    secondLevel = getRandomInt(symbols[firstLevel].length-1);
    string += symbols[firstLevel][secondLevel];
  }
  console.log(string);
  return string;
}

const  getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}