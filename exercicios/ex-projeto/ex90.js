// Como corrigir os erros abaixo

const imgs2 = document.querySelectorAll('img')

imgs2.forEach((item, index) => {
    console.log(item, index)
})

let i = 0
imgs2.forEach(() => { // Faltou os parenteses
    console.log(i++)
})

imgs2.forEach(() => i++)