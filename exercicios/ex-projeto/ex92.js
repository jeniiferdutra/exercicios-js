// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

ativo.forEach((item) => { // Para cada elemento <a> encontrado, remove a classe 'ativo'
    item.classList.remove('ativo')
})

ativo[0].classList.add('ativo') // Adiciona a classe 'ativo' apenas ao primeiro elemento do menu