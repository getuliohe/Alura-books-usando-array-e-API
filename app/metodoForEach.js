const listaDeLivrosUl = document.querySelector('#livros')

function exibirLivrosNaTela(livros) {
  elmentoPrecoTodosDisponiveis.innerHTML = ''
  listaDeLivrosUl.innerHTML = ``
  livros.forEach((livro) => {
      let disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel'
      listaDeLivrosUl.innerHTML += `
      <div class="livro">
        <img class="livro__imagens ${disponibilidade}" src="${livro.imagem}"
          alt="${livro.alt}" />
        <h2 class="livro__titulo">
          ${livro.titulo}
        </h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
          <div class="tags">
          <span class="tag">${livro.categoria}</span>
        </div>
      </div>
      `
  })
}