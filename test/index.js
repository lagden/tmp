'use strict'

import test from 'ava'
import divisao from '../modules/divisao'
import soma from '../modules/soma'
import subtracao from '../modules/subtracao'
import multiplica from '../modules/multiplica'
import calculadora from '../.'

test('multiplica', t => {
	const total = multiplica(10, 5)
	t.is(total, 50)
})

test('divisao', t => {
	const total = divisao(10, 5)
	t.is(total, 2)
})

test('divisao por 0', t => {
	const total = divisao(10, 0)
	t.is(total, 0)
})

test('soma', t => {
	const total = soma(2, 3, 4)
	t.is(total, 9)
})

test('subtracao', t => {
	const total = subtracao(2, 3, 4)
	t.is(total, -5)
})

test('calculadora', t => {
	const calc = calculadora().plus(5, 5).less(7)
	t.is(calc.total, 3)
})
