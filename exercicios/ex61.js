/*Escreva um programa que leia o ano de nascimento de um rapaz e mostre a sua situação em relação ao alistamento militar.
 - Se estiver antes dos 18 anos, mostre em quantos anos faltam para o alistamento.
 - Se já tiver depois dos 18 anos, mostre quantos anos já se passaram do alistamento */

let anoNascimento = 2009
let anoAtual = new Date().getFullYear()
let idade = anoAtual - anoNascimento  

if(idade < 18) {
    let anosFaltantes = 18 - idade
    console.log(`Você tem ${idade} anos. Portanto, faltam ${anosFaltantes} anos para o alistamento.`)
} else if(idade >= 18) {
    let anosPassados = idade - 18
    console.log(`Você tem ${idade} anos, já se passaram ${anosPassados} anos do alistamento`)
}
