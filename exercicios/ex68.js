/* Escreva um programa para aprovar ou não o empréstimo bancário para a compra de uma casa. O programa vai perguntar o valor da casa, o salário do comprador e 
em quantos anos ele vai pagar. Calcule o valor da prestação mensal, sabendo que ela não pode exceder 30% do salário ou então o empréstimo será negado. */

let valorCasa = parseFloat(500000);
let salarioComprador = parseFloat(7000);
let anosParaPagar = parseInt(10);

let mesesParaPagar = anosParaPagar * 12; 
let prestacaoMensal = valorCasa / mesesParaPagar;

if (prestacaoMensal <= (salarioComprador * 0.3)) {
    console.log("Empréstimo aprovado!");
    console.log(`Valor da prestação mensal: R$${prestacaoMensal.toFixed(2)}`);
} else {
    console.log("Empréstimo negado. A prestação excede 30% do seu salário.");
}