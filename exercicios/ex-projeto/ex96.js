// Retorne a soma da largura de todas as imagens

function somaImagens () {
    const larguraImagens = document.querySelectorAll('img')
    let soma = 0
    larguraImagens.forEach((imagem) => {
        soma += imagem.offsetWidth        
    })
    console.log(soma)
}

window.onload = function() {
    somaImagens()
}