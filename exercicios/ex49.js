/*  Desenvolva um programa que leia uma distância em metros e mostre os valores relativos em outras medidas.
Ex:
Digite uma distância em metros: 185.72
*/

let metros = parseFloat(185.72)
let quilometros = metros / 1000
let hectometros = metros / 100
let decametros = metros / 10
let decimetros = metros * 10
let centimetros = metros * 100
let milimetros = metros * 1000

console.log(`A distancia de ${metros}m correponde a: `)
console.log(`${quilometros.toFixed(5)}Km`)
console.log(`${hectometros.toFixed(4)}Hm`)
console.log(`${decametros.toFixed(3)}Dam`)
console.log(`${decimetros.toFixed(1)}dm`)
console.log(`${centimetros.toFixed(1)}cm`)
console.log(`${milimetros.toFixed(1)}mm`)
