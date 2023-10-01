// Modifique o href do link externo no menu

const linkExterno = document.querySelector('[href^="http"]')

linkExterno.setAttribute('href', 'https://www.google.com')

console.log(linkExterno)

//linkExterno.forEach((ultimoLink) => {
//    const ultimoLink = linkExterno[--linkExterno.length]
//    ultimoLink.classList.toggle('[href^=https://chat.openai.com/]')
//})