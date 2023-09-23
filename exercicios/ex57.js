/* Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80Km/h, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da multa, cobrando R$5 por cada Km acima da velocidade permitida. */

let velocidade = 95

if(velocidade > 80) {
    let valorMulta = (velocidade - 80) * 5
    console.log(`ATENÇÂO! Você foi multado. Portanto, o valor da multa é de R$${valorMulta.toFixed(2)} reais.`)
}