// Mostre o texto dos paragrafos no console

const textoParagrafo = document.querySelectorAll('p')

textoParagrafo.forEach((texto) => {
    console.log(texto.innerText)
})