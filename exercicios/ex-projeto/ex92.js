// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

ativo.forEach((item) => {
    item.classList.remove('ativo')
})

ativo[0].classList.add('ativo')