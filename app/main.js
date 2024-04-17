const endpointDaApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

let livros = [];

getLivrosDaApi();

async function getLivrosDaApi(){
    const res = await fetch(endpointDaApi);
    livros = await res.json();
    let livrosComDesconto = aplicarDesconto(livros);
    exibirLivrosNaTela(livrosComDesconto);
}
