/* Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar descontos para todos, mas especialmente para mulheres. Faça um programa que leia nome, sexo e o valor das compras do cliente e calcule o preço com desconto. Sabendo que:
 - Homens ganham 5% de desconto
 - Mulheres ganham 13% de desconto */

let nome = 'Jenifer'
let sexo = 'Feminino'
let valorCompra = parseFloat(250)

if(sexo === 'Feminino') {
    porcentagem = valorCompra * 0.13
    novoValor = valorCompra - porcentagem
    console.log(`Valor da compra com 13% de desconto ficou R$${novoValor.toFixed(2)} reais`)
} else if(sexo === 'Masculino') {
    porcentagem = valorCompra * 0.05
    novoValor = valorCompra - porcentagem
    console.log(`Valor da compra com 5% de desconto ficou R$${novoValor.toFixed(2)} reais`)
}