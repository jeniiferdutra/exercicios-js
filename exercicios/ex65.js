/*Crie um programa que leia duas notas de um aluno e calcule a sua média, mostrando uma mensagem no final, de acordo com a média atingida:
 - Média até 4.9: REPROVADO
 - Média entre 5.0 e 6.9: RECUPERAÇÃO
 - Média 7.0 ou superior: APROVADO */

let nota1 = parseFloat(2)
let nota2 = parseFloat(7)
let media = (nota1 + nota2) / 2

console.log(media)

if(media < 4.9) {
    console.log('REPROVADO')
} else if(media <= 6.9) {
    console.log('RECUPERAÇÃO')
} else {
    console.log('APROVADO')
}