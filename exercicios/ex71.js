/*Um programa de vida saudável quer dar pontos atividades físicas que podem ser trocados por dinheiro. O sistema funciona assim:
 - Cada hora de atividade física no mês vale pontos
 - até 10h de atividade no mês: ganha 2 pontos por hora
 - de 10h até 20h de atividade no mês: ganha 5 pontos por hora
 - acima de 20h de atividade no mês: ganha 10 pontos por hora
 - A cada ponto ganho, o cliente fatura R$0,05 (5 centavos)  
 Faça um programa que leia quantas horas de atividade uma pessoa teve por mês, calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar.*/

let horasPraticadas = 25
let pontos

if(horasPraticadas <= 10) {
    pontos = horasPraticadas * 2
} else if(horasPraticadas <= 20) {
    pontos = (10 * 2) + ((horasPraticadas - 10) * 5)
} else {
    pontos = (10 * 2) + (10 * 5) + ((horasPraticadas - 20) * 10)
}

let valorEmDinheiro = pontos * 0.05

console.log(`O participante praticou ${horasPraticadas}horas. Portanto, ganhou ${pontos} pontos, o que equivale a R$${valorEmDinheiro.toFixed(2)}.`)