// Crie uma função que verifica se o número é par

function parImpar(num) {
    if(num % 2 == 0) {
        return 'Par'
    } else {
        return 'Impar'
    }
}

var funcao = parImpar(8)

console.log(funcao)