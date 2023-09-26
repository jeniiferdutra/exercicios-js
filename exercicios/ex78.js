/* Crie um algoritmo que leia o valor inicial da contagem, o valor final e o incremento, mostrando em seguida todos os valores no intervalo:
Ex: Digite o primeiro Valor: 3
Digite o último Valor: 10
Digite o incremento: 2
Contagem: 3 5 7 9 Acabou! */

let n1 = 3
let n2 = 10
let incremento = 2
while(n1 <= n2) {
    console.log(n1)
    n1 = n1 + incremento
}

console.log('Acabou!')