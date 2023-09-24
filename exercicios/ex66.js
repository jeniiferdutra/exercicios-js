/*Faça um programa que leia a largura e o comprimento de um terreno retangular, calculando e mostrando a sua área em m². O programa também devemostrar a classificação desse terreno, de acordo com a lista abaixo:
 - Abaixo de 100m² = TERRENO POPULAR
 - Entre 100m² e 500m² = TERRENO MASTER
 - Acima de 500m² = TERRENO VIP */

let largura = 70
let comprimento = 95
let area = largura * comprimento

console.log(`Área do terreno: ${area}m²`)

if(area < 100) {
    console.log('Terreno Regular')
} else if(area <= 500) {
    console.log('Terreno Master')
} else {
    console.log('Terreno VIP')
}