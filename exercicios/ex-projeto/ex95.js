/* A maioria são Read Only

section.clientHeight = height + paddig
section.offsetHeight = height + padding + border
section.scrollHeigh = height total, mesmo dentro do scroll
msm coisa para Width

section.offsetTop = distancia entre topo do elemento e topo da pag
section.offsetLeft = distancia esquerdo do elemento e esquero da pag

getBoundingClientRect() pega todos os elementos (width, height, etc)

Verifique a distância da primeira imagem em relação ao topo da página

*/

const primeiraImagem = document.querySelector('img')

console.log(primeiraImagem.offsetTop)