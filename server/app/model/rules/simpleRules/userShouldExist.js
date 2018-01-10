const {User} = require('../../../objects/user')

module.exports = (user) => {
	if (user instanceof User) {
		return !!user
	} else {
		throw new Error('proivided user is not a Userobject');
	}
}