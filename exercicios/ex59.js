/*Crie um algoritmo que leia o nome e as duas notas de um aluno, calcule a sua média e mostre na tela. No final, analise a média e mostre se o aluno teve ou não um bom aproveitamento (se ficou acima da média 7.0).*/

let nome = 'Jenifer'
let nota1 = parseFloat(8)
let nota2 = parseFloat(7)
let media = (nota1 + nota2) / 2

console.log(`A média da aluna ${nome} foi de ${media.toFixed(1)}`)

if(media >= 7) {
    console.log('APROVADA!')
} else {
    console.log('REPROVADA')
}