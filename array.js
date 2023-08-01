function acessar() {
    let loginEmail = document.getElementById("loginEmail").value;
    let loginSenha = document.getElementById("loginSenha").value;

    if (!loginEmail || !loginSenha) {
        alert("favor preencha os campos para acessar o site");
    } else {
        window.location.href = "array.html";
    }
}
var agenda = [];
var dataAgenda = [];

function salvarUser() {
    let nomeUser = document.getElementById("nomeUser").value;
    let dataC = document.getElementById("dataC").value;
    if (nomeUser) {

        agenda.push(nomeUser);
        dataAgenda.push(dataC);
        criarLista();
        document.getElementById('nomeUser').value = '';
        document.getElementById('dataC').value = '';
    }

}

//FUNÇÃO PARA CRIAR LISTA DE USUÁRIOS
function criarLista() {
    let tabela = document.getElementById('tabela').innerHTML = "<tr><th>Nome Usuário</th><th>Ações</th></tr>";

    for (let i = 0; i <= (agenda.length - 1); i++) {
        tabela += "<tr><td>" + agenda[i] + ' ' + dataAgenda[i]
        + "</td><td><button class='btn btn-success' onclick='editar(this.parentNode.parentNode.rowIndex)'>Editar</button><button class='btn btn-danger' onclick='excluir(this.parentNode.parentNode.rowIndex)'>Excluir</button></td></tr>";
        document.getElementById('tabela').innerHTML = tabela;
    }
}

//FUNÇÃO PARA EDITAR NOME

function editar(i) {
    document.getElementById('nomeUser').value = agenda[(i - 1)];
    dadosLista.splice(agenda[(i - 1)], 1);
}

// FUNÇÃO PARA EXCLUIR NOME

function excluir(i) {
    agenda.splice((i - 1), 1);
    document.getElementById('tabela').deleteRow(i);
}