/* O Índice de Massa Corpórea (IMC) é um valor calculado baseado na altura e no 
peso de uma pessoa. De acordo com o valor do IMC, podemos classificar o 
indivíduo dentro de certas faixas.
 - abaixo de 18.5: Abaixo do peso
 - entre 18.5 e 25: Peso ideal
 - entre 25 e 30: Sobrepeso
 - entre 30 e 40: Obesidade
 - acima de 40: Obseidade mórbida */

let altura = parseFloat(1.59)
let peso = parseFloat(55)
let imc = peso / (altura * altura)

console.log(`IMC: ${imc.toFixed(2)}`)

if(imc < 18.5) {
    console.log('Abaixo do peso')
}else if (imc <= 25) {
    console.log('Peso ideal');
} else if(imc <= 30) {
    console.log('Sobrepeso')
} else if(imc <= 40) {
    console.log('Obesidade')
} else {
    console.log('Obesidade Mórbida')
}