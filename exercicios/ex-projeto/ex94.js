// Modifique o href do link externo no menu

const link = document.querySelector('a[href^="https"]')

link.setAttribute('href', 'https://www.google.com.br/')

console.log(link)