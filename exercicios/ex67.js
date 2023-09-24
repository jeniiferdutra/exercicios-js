/*Desenvolva um programa que leia o nome de um funcionário, seu salário, quantos anos ele trabalha na empresa e mostre seu novo salário, reajustado de acordo com a tabela a seguir:
 - Até 3 anos de empresa: aumento de 3%
 - entre 3 e 10 anos: aumento de 12.5%
 - 10 anos ou mais: aumento de 20% */

let nome = 'Jenifer'
let salario = parseFloat(2500)
let anosTrabalhados = parseInt(2)

if(anosTrabalhados < 3) {
    novoSalario = salario + (0.03 * salario);
    console.log(`O novo salário com o aumento de 3% ficou R$${novoSalario.toFixed(2)}`)
} else if(anosTrabalhados < 10) {
    novoSalario = salario + (0.125 * salario);
    console.log(`O novo salário com o aumento de 3% ficou R$${novoSalario.toFixed(2)}`)
} else {
    novoSalario = salario + (0.20 * salario);
    console.log(`O novo salário com o aumento de 3% ficou R$${novoSalario.toFixed(2)}`)
}