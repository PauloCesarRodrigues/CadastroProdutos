let produtosOrdenados = []
const tabelaCorpo = document.querySelector('.tabela-corpo');
const formulario = document.querySelector('.formulario');
tabelaCorpo.innerHTML = '';


function ordenaProdutos(){
    const produtos = JSON.parse(localStorage.getItem('produtos')) || []
    produtosOrdenados = produtos.sort((a, b) => a.valor - b.valor);
    criaTabela();
} 



function criaTabela() {
    for (let i = 0; i < produtosOrdenados.length; i++) {
        let nome = produtosOrdenados[i].nome;
          let valor = produtosOrdenados[i].valor;

        const criarlinha = document.createElement('tr');
    
            const nomeNaTabela = document.createElement('td')
        const valorNaTabela = document.createElement('td');

            nomeNaTabela.textContent = nome;
         valorNaTabela.textContent = valor;

         criarlinha.appendChild(nomeNaTabela);
     criarlinha.appendChild(valorNaTabela);

        tabelaCorpo.appendChild(criarlinha);
    }
}





ordenaProdutos();