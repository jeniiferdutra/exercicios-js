/* Faça um algoritmo que leia a largura e altura de uma parede, calcule e
mostre a área a ser pintada e a quantidade de tinta necessária para o serviço, sabendo que cada litro de tinta pinta uma área de 2metros quadrados. */

let largura = parseFloat(9.5)
let altura = parseFloat(4.6)
let area = largura * altura
let tintaQuantidade = 2
let total = area / tintaQuantidade

console.log(`A area total é de ${area.toFixed(2)}m², serão necessários ${total.toFixed(0)} litros de tinta.`)