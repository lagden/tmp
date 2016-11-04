'use strict'

const soma = require('./modules/soma')
const subtracao = require('./modules/subtracao')
const divisao = require('./modules/divisao')

function calculadora(total = 0) {
	const calc = fn => (...n) => calculadora(fn(...[total].concat(n)))
	const plus = calc(soma)
	const less = calc(subtracao)
	const div = calc(divisao)
	return {total, plus, less, div}
}

module.exports = calculadora
