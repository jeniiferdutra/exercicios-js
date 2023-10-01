// Verifique se as imagens possui atributo alt

const imgsAtributo = document.querySelectorAll('img')

imgsAtributo.forEach((img) => {
    const possuiAtributo = img.hasAttribute('alt')
    console.log(img, possuiAtributo)
}) 