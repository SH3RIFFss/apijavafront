const apiUrl = "https://apis3fjava.online/persistence/funcionario";
function mostrarTabela(id) {
    const tabela = document.getElementById(id);
    tabela.classList.toggle("hidden");
}
//teste de conexão com o back-end 
async function conexao() {
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
async function carregarTabela() {
    try {
        const lista=await conexao();
        consumirFuncionario(lista);
    } catch (error) {
        console.log("deu ruinnnnmmmm...");
    }
}
function consumirFuncionario(dados) {
    const funcionarios = document.getElementById("dadosFuncionarios");
    const dadoFuncionario = document.createElement("tr");
    if (!dados || dados.length === 0) {
        dadoFuncionario.innerText = "erro....";
        return;
    }
    dados.forEach(element => {
        dadoFuncionario.innerHTML = `<tr>
        <td>${element.id}</td>
        <td>${element.nome}</td>
        <td>${element.cargo}</td>
        </tr>`;
        funcionarios.appendChild(dadoFuncionario);
    });

}
// function consumirProduto(id, idFuncionario, quantidade, nome, valor, distribuidor, data) {
//     const produtos = document.getElementById("dadosProdutos");
//     const dadoProduto = document.createElement("tr");
//     dadoProduto.innerHTML = `<tr>
//                         <td>${id}</td>
//                         <td>${idFuncionario}</td>
//                         <td>${nome}</td>
//                         <td>${quantidade}</td>
//                         <td>${valor}</td>
//                         <td>${distribuidor}</td>
//                         <td>${data}</td>
//                     </tr>`;
//     produtos.appendChild(dadoProduto);
// }
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