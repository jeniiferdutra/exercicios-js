
/* Crie um programa que leia o preço de um produto, calcule e mostre o seu PREÇO PROMOCIONAL, com 5% de desconto. */

let preco = parseFloat(52.5)
let promo = (preco * 5.0) / 100
let total = preco - promo

console.log(`O valor do produto é deR$${preco.toFixed(2)} e com o valor promocional com 5% de desconto fica R$${total.toFixed(2)}`)

