/*Desenvolva um aplicativo que mostre na tela o resultado da expressão 
    500 + 450 + 400 + 350 + 300 + ... + 50 + 0 */

let num = 500
let soma = 0

while(num >= 0) {
    soma = soma + num
    num = num - 50
}

console.log(`Resultado: ${soma}`)