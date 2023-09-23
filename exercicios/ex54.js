/* A locadora de carros precisa da sua ajuda para cobrar seus serviços. Escreva um programa que pergunte a quantidade de Km percorridos por um carro alugado e a quantidade de dias pelos quais ele foi alugado. Calcule o preço total a pagar, sabendo que o carro custa R$90 por dia e R$0,20 por Km rodado. */

let diasAlugados = parseInt(10)
let kmPercorridos = parseFloat(35)

let precoPorKm = parseFloat(0.20)
let precoPorDia = parseFloat(90)

let precoTotal = (diasAlugados * precoPorDia) + (kmPercorridos * precoPorKm)

console.log(`O preço total a pagar é de R$${precoTotal.toFixed(2)}`)