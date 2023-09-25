/*Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um carro custa R$90 por dia para carro popular e R$150 por dia para carro de luxo. Além disso, o cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado (popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final mostre o preço a ser pago de acordo com a tabela a seguir:
 - Carros populares (aluguel de R$90 por dia)
 - Até 100Km percorridos: R$0,20 por Km
 - Acima de 100Km percorridos: R$0,10 por Km
 - Carros de luxo (aluguel de R$150 por dia)
 - Até 200Km percorridos: R$0,30 por Km
 - Acima de 200Km percorridos: R$0,25 por Km */

let tipoCarro = ['Carro popular', 'Carro de luxo']
let diasAlugados = 15
let kmPercorridos = 300

carroEscolhido = tipoCarro[1]

if(carroEscolhido == tipoCarro[0] && kmPercorridos <= 100) {
    let precoTotal = (kmPercorridos * 0.20) + (diasAlugados * 90)
    console.log(`O valor total dos ${diasAlugados} dias de aluguel de um ${tipoCarro[0]} ficou R$${precoTotal.toFixed(2)}`)
} else if(carroEscolhido == tipoCarro[0] && kmPercorridos > 100) {
    let precoTotal = (kmPercorridos * 0.10) + (diasAlugados * 90)
    console.log(`O valor total dos ${diasAlugados} dias de aluguel de um ${tipoCarro[0]} ficou R$${precoTotal.toFixed(2)}`)
} else if(carroEscolhido == tipoCarro[1] && kmPercorridos <= 200) {
    let precoTotal = (kmPercorridos * 0.30) + (diasAlugados * 150)
    console.log(`O valor total dos ${diasAlugados} dias de aluguel de um ${tipoCarro[1]} ficou R$${precoTotal.toFixed(2)}`)
} else {
    let precoTotal = (kmPercorridos * 0.25) + (diasAlugados * 150)
    console.log(`O valor total dos ${diasAlugados} dias de aluguel de um ${tipoCarro[1]} ficou R$${precoTotal.toFixed(2)}`)
}