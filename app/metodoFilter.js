const botoes = document.querySelectorAll('.btn');
const elmentoPrecoTodosDisponiveis = document.querySelector('#valor_total_livros_disponiveis')

botoes.forEach(botao => botao.addEventListener('click',filtrarLivros))

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value;

    let livrosFiltrados = categoria=='disponivel'?filtrarPorDisponibilidade() : filtrarPorCategoria(categoria)

    exibirLivrosNaTela(livrosFiltrados)
    if (categoria == 'disponivel') {
        let valorTotal = calcularValorTotal(livrosFiltrados)
        exibirValorTotalDisponivel(valorTotal)
    }
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTotalDisponivel(total) {
    elmentoPrecoTodosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${total}</span></p>
    </div>
    `
}

