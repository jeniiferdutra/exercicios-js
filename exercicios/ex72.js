/* Uma empresa precisa reajustar o salário dos seus funcionários, dando um aumento de acordo com alguns fatores. Faça um programa que leia o salário atual, o gênero do funcionário e há quantos anos esse funcionário trabalha na empresa. No final, mostre o seu novo salário, baseado na tabela a seguir:
- Mulheres
 - menos de 15 anos de empresa: +5%
 - de 15 até 20 anos de empresa: +12%
 - mais de 20 anos de empresa: +23%
- Homens
 - menos de 20 anos de empresa: +3%
 - de 20 até 30 anos de empresa: +13%
 - mais de 30 anos de empresa: +25%
 */

let salarioAtual = 4500
let generoFuncionario = 'Masculino'
let anosTrabalhados = 5
let novoSalario

if(generoFuncionario === 'Feminino') {
    if(anosTrabalhados <= 15) {
        novoSalario = salarioAtual * 1.05
    } else if (anosTrabalhados >= 15 && anosTrabalhados <= 20) {
        novoSalario = salarioAtual * 1.12 }
      else {
        novoSalario = salarioAtual * 1.23 
    }
} else if (generoFuncionario === 'Masculino') {
    if (anosTrabalhados < 20) {
        novoSalario = salarioAtual * 1.03 
    } else if (anosTrabalhados >= 20 && anosTrabalhados <= 30) {
        novoSalario = salarioAtual * 1.13 
    } else {
        novoSalario = salarioAtual * 1.25 
    }
}

console.log(`Gênero: ${generoFuncionario}`)
console.log(`Anos trabalhados: ${anosTrabalhados} anos`)
console.log(`Novo salário: R$ ${novoSalario.toFixed(2)}`)