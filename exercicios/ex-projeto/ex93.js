// Verifique se as imagens possui atributo alt

const imagensAtributo = document.querySelectorAll('img')

imagensAtributo.forEach((img) => {
    const possuiAtributo = img.hasAttribute('alt')
    console.log(possuiAtributo, img)
})