// Se o browser for menor que 720px, adicione a classe menu-mobile ao menu

const browserSmall = window.matchMedia('(max-width: 720px').matches

if(browserSmall) {
    const menu = document.querySelector('.menu')
    menu.classList.add('menu-mobile')
}