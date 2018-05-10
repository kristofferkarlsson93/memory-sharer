const { getTokenForUser } = require('../app/helpers/authHelper');


const userGuid = process.argv[2] ? process.argv[2] : 'Wvkt731252RA1e237R7Km2XvI3X1Ps084'

const token = getTokenForUser(userGuid);
console.log(token);

