// Atribua true para a variavel darCredito caso o cliente poussua carro e casa e false caso o contrario

var possuiCarro = true
var possuiCasa = false

var darCredito = (possuiCarro && possuiCasa) ? 'Dar crédito ao cliente.' : 'Negar crédito.'
console.log(darCredito)