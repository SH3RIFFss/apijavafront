const apiUrl = "https://apis3fjava.online/persistence/funcionario";
function mostrarTabela(id) {
    const tabela = document.getElementById(id);
    tabela.classList.toggle("hidden");
}
//teste de conexão com o back-end 
//conexão e consumo da entidade funcionario
async function conexaoFuncionario() {
    try {
        const resposta = await fetch(apiUrl, {
            method: "GET", headers: {
                "Content-type": "application/json"
            }
        });
        if (!resposta.ok) {
            throw new Error(`erro na api....${resposta.status}`)
        }
        return await resposta.json();
    } catch (error) {
        console.log("fodeuuu.... ", error);
    }
}
//conexão e consumo da entidade produto
//chamada para a tranasparencia dos dados recebidos
async function carregarTabela(conexao) {
    try {
        const lista = await conexao();
        consumirFuncionario(lista);
    } catch (error) {
        console.log("deu ruinnnnmmmm...");
    }
}
function consumirFuncionario(dados) {
    const funcionarios = document.getElementById("dadosFuncionarios");
    if (!dados || dados.length === 0) {
        funcionarios.innerText = "dados dos funcionarios não retornaram";
        return;
    }
    let listaitens = "";
    dados.forEach(element => {
        listaitens += `<tr>
        <td>${element.id}</td>
        <td>${element.nome}</td>
        <td>${element.cargo}</td>
        </tr>`;
        funcionarios.innerHTML = listaitens;
    });

}
function consumirProduto(dados) {
    const produtos = document.getElementById("dadosProdutos");
    if (!dados || dados.length === 0) {
        produtos.innerText = "dados dos produtos não retornaram";
        return;
    }
    let lista;
    dados.forEach(element => {
        lista += `<tr>
                <td>${element.id}</td>
                <td>${element.idFuncionario}</td>
                <td>${element.nome}</td>
                <td>${element.quantidade}</td>
                <td>${element.valor}</td>
                <td>${element.distribuidor}</td>
                <td>${element.data}</td>
            </tr>`;
        produtos.innerHTML = lista;
    })

}
// const persistirFuncionario = document.getElementById('btnFormFuncionario').addEventListener("click", (e) => {
//     e.preventDefault();
//     const nome = document.getElementById("nomeFuncionario");
//     const cargo = document.getElementById("cargoFuncionario");
//     const nomeV = nome.value;
//     const cargoV = cargo.value;

//     consumirFuncionario(0, nomeV, cargoV);
// })
// const persistirProduto = document.getElementById("btnFormProduto").addEventListener("click", (e) => {
//     e.preventDefault();
//     const idFuncionario = document.getElementById("idFuncionario");
//     const nome = document.getElementById("nome");
//     const valor = document.getElementById("valor");
//     const distribuidor = document.getElementById("distribuidor");
//     const data = document.getElementById("data");
//     const quantidade = document.getElementById("quantidade");

//     const idFuncionarioV = idFuncionario.value;
//     const nomeV = nome.value;
//     const valorV = valor.value;
//     const distribuidorV = distribuidor.value;
//     const dataV = data.value;
//     const quantidadeV = quantidade.value;

//     consumirProduto(0, idFuncionarioV, quantidadeV, nomeV, valorV, distribuidorV, dataV);
// })