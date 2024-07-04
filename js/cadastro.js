try{
const none = none;
}catch(e){
    e = 0;
}


let formulario = document.querySelector('.formulario');
let listaProdutos = []

function recebeEventoFormulario(e) {
    e.preventDefault();

    const nome = formulario.nome.value;
    const descricao = formulario.descricao.value;
    const valor = formulario.valor.value;
    const opcao = formulario.querySelector('input[name="disponibilidade"]:checked');
    let disponibilidade;

    try{
    disponibilidade = opcao.value;
    } catch (e){
        const err = e;
    }

    if (nome === '') return alert('Produto sem nome.');
    if (descricao === '') return alert('Produto sem descrição.');
    if (valor === '') return alert('Produto sem Preço.');
    if (!opcao) return alert('Selecione a disponibilidade do produto.')


    function Produto(nome, descricao, valor, disponibilidade) {
        this.nome = nome;
        this.descricao = descricao;
        this.valor = valor;
        this.disponibilidade = disponibilidade;
    }

    const criarproduto = new Produto(nome, descricao, valor, disponibilidade)


    function recuperaProdutos() {
        const produtos = localStorage.getItem('produtos');
        if (produtos) listaProdutos = JSON.parse(produtos);

    }

    function salvaProdutos() {

        const produtosJSON = JSON.stringify(listaProdutos);
        localStorage.setItem('produtos', produtosJSON);

    }

    recuperaProdutos();
    listaProdutos.push(criarproduto);
    salvaProdutos();


    window.location.href = 'listagem.html';
}
formulario.addEventListener('submit', recebeEventoFormulario);

