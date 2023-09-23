/* Faça um programa que leia o ano de nascimento de uma pessoa, calcule a idade dela e depois mostre se ela pode ou não votar.*/

let idade = 23

if(idade >= 16 && idade <= 17 || idade > 70) {
    console.log('Voto opcional')
} else if (idade >= 18 ) {
    console.log('Voto obrigatório')
}
else {
    console.log('Não pode votar')
}