/*Crie um programa que calcule e mostre na tela o resultado da soma entre 
    6 + 8 + 10 + 12 + 14 + ... + 98 + 100 */

let numero = 6
let soma = 0

while(numero <= 100) {
    soma =  soma + numero
    numero = numero + 2
}
console.log(`Resultado da soma: ${soma}`)