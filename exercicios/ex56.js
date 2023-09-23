/*Escreva um programa para calcular a redução do tempo de vida de um
fumante. Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou. Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de vida um fumante perderá e exiba o total em dias.
 */

let quantidadePorDia = 10
let anosFumando = 5

let minutosPerdidos = quantidadePorDia * anosFumando * 365 * 10 
let diasPerdidos = minutosPerdidos / 1440

console.log(`Um fumante que fuma cerca de ${quantidadePorDia} cigarros por dia e está ${anosFumando} anos fumando, perde em média ${diasPerdidos.toFixed(2)} dias perdidos.`)