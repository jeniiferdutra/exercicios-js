/* Faça um algoritmo que leia o salário de um funcionário, calcule e mostre o seu novo salário, com 15% de aumento. */

let salario = parseFloat(1.300)
let aumento = salario * 0.15
let total = salario + aumento

console.log(`O salário de R$${salario.toFixed(3)} com o aumento de 15% ficou R$${total.toFixed(3)}`)
