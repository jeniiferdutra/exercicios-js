// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera.

var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância'] 
    for(var i = 0; i < frutas.length; i++) {
            console.log(frutas[i])
        if(frutas[i] === 'Pera') {
            break;
        }
    }

var ultimaFruta = frutas[frutas.length - 1]
console.log(ultimaFruta)

console.log(frutas)

// Coloque a última fruta da array acima em uma variavel, sem remover a mesma da array