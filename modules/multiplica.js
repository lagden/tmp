'use strict'

function multiplica(...numbers) {
	return numbers.reduce((p, c) => p * c)
}

module.exports = multiplica
