/* Crie um programa que leia o número de dias trabalhados em um mês e mostre o salário de um funcionário, sabendo que ele trabalha 8 horas por dia e ganha R$25 por hora trabalhada. */

let diasTrabalhados = parseInt(20)
let valorPorHora = parseFloat(25)
let total = diasTrabalhados * 8 * valorPorHora 

console.log(`O salário mensal do funcionário é de R$${total.toFixed(2)}`)