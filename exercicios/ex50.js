/*  Faça um algoritmo que leia quanto dinheiro uma pessoa tem na carteira (em R$) e mostre quantos dólares ela pode comprar. Considere US$1,00 = R$3,45. */

let reais = 100
let dolares = 4.92
let conversor = reais / dolares

console.log(`Com R$${reais.toFixed(2)} você pode comprar aproximadamente $US${conversor.toFixed(2)}`)