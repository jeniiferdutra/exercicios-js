// Modifique o href do link externo no menu

const linkExterno = document.querySelector('[href^="http"]')// Seleciona o primeiro elemento cujo atributo 'href' começa com "http"

linkExterno.setAttribute('href', 'https://www.google.com')  // Define o atributo 'href' do elemento selecionado para "https://www.google.com"


console.log(linkExterno) // Exibe no console o elemento modificado

