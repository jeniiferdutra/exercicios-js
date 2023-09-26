/* Faça um algoritmo que pergunte ao usuário um número inteiro e positivo qualquer e mostre uma contagem até esse valor:
Ex: Digite um valor: 35
Contagem: 1 2 3 4 5 6 7 ... 33 34 35 Acabou! */

let n1 = parseInt(1)
let n2 = parseInt(38)

while(n1 <= n2){
    console.log(n1)
    n1 = n1 + 1
}

console.log('Acabou!')