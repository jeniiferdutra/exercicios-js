/* Verifique se os links da página possuem o mínimo recomendado para tela utilizadas com o dedo (48px/48px de acordo com o google) */

const links = document.querySelectorAll('a')

links.forEach((link) => {
    const linkWidth = link.offsetWidth
    const linkHeight = link.offsetHeight
    if(linkWidth >= 48 && linkHeight >= 48) {
        console.log(link, 'Possui acessibilidade')
    } else {
        console.log(link, 'Não possui boa acessibilidade')
    }
})