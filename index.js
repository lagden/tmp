'use strict'

const soma = require('./modules/soma')
const subtracao = require('./modules/subtracao')
const multiplica = require('./modules/multiplica')
const divisao = require('./modules/divisao')

function calculadora(total = 0) {
	const calc = fn => (...n) => calculadora(fn(...[total].concat(n)))
	const plus = calc(soma)
	const less = calc(subtracao)
	const multiply = calc(multiplica)
	const div = calc(divisao)
	return {total, plus, less, multiply, div}
}

module.exports = calculadora
