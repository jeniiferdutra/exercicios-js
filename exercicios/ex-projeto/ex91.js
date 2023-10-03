// Adicione a classe ativo a todos os itens do menu

const ativo = document.querySelectorAll('.menu a')  // Seleciona todos os elementos <a> dentro do elemento com a classe 'menu'
ativo.forEach((item) => {  // Para cada elemento <a> encontrado, executa a seguinte função
    item.classList.add('ativo')  // Adiciona a classe 'ativo' ao elemento atual
})