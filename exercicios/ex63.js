/*Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em Km. Calcule o preço da passagem, cobrando R$0.50 por Km para viagens até 200Km e R$0.45 para viagens mais longas. */

let distanciaKm = 80;
let precoKmMenos200 = 0.50;
let precoKmMais200 = 0.45;

if (distanciaKm <= 200) {
    precoPassagem = precoKmMenos200 * distanciaKm;
} else {
    precoPassagem = precoKmMais200 * distanciaKm;
}

console.log(`O valor da passagem é R$${precoPassagem.toFixed(2)} reais`);