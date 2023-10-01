// Adicione a classe ativo a todos os itens do menu

const ativo = document.querySelectorAll('.menu a')
ativo.forEach((item) => {
    item.classList.add('ativo')
})