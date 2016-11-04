'use strict'

const soma = require('./modules/soma')
const subtracao = require('./modules/subtracao')
const multiplica = require('./modules/multiplica')

function calculadora(total = 0) {
	const calc = fn => (...n) => calculadora(fn(...[total].concat(n)))
	const plus = calc(soma)
	const less = calc(subtracao)
	const multiply = calc(multiplica)
	return {total, plus, less, multiply}
}

module.exports = calculadora
