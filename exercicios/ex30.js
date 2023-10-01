// Crie um método no exercício anterior, que mostre o seu nome completo

var dadosPessoais = {
    nome: 'Jenifer',
    sobrenome: 'Rocha Dutra',
    idade: 23,
    cidade: 'SP',
    curso: 'ADS'
}

dadosPessoais.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`
}

console.log(dadosPessoais.nomeCompleto())