// Verifique se as imagens possui atributo alt

const imgsAtributo = document.querySelectorAll('img') // Seleciona todos os elementos <img> na página

imgsAtributo.forEach((img) => { // Para cada elemento <img> encontrado, executa a seguinte função
    const possuiAtributo = img.hasAttribute('alt') // Verifica se o elemento <img> possui o atributo 'alt'
    console.log(img, possuiAtributo)    // Exibe no console o elemento <img> e se possui ou não o atributo 'alt'
}) 