// Crie um objeto de um cachorro que represente um labrador, preto com 10 anos, que late ao ver um homem

var cachorro = {
    raca: 'Labrador',
    cor: 'Preto',
    idade: 10,
    latir(pessoa) {
        if (pessoa.toLowerCase() === 'homem') {
        return 'Latir'
        } else {
        return 'Não latir'
        }
    }
}

console.log(cachorro.latir('Homem'))