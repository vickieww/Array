var agenda = [];
var dataAgenda = [];

function salvarC() {
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

//FUNÇÃO PARA SALVAR COMPROMISSO E DATA DO COMPROMISSO
function criarLista() {

    let tabela = document.getElementById('tabela').innerHTML = "<tr><th>Compromissos</th><th>Data</th></tr>";
    for (let i = 0; i <= (agenda.length - 1); i++) {

        tabela += "<tr><td>" + agenda[i] + ' ' + dataAgenda[i]

        + "</td><td><button class='btn btn-success' onclick='editar(this.parentNode.parentNode.rowIndex)'>Editar</button><button class='btn btn-danger' onclick='excluir(this.parentNode.parentNode.rowIndex)'>Excluir</button></td></tr>";

        document.getElementById('tabela').innerHTML = tabela;
    }

}

//FUNÇÃO PARA EDITAR COMPROMISSO
function editar(i) {
    document.getElementById('nomeUser').value = agenda[(i - 1)];
    agenda.splice(dataAgenda[(i - 1)], 1);

}

// FUNÇÃO PARA EXCLUIR COMPROMISSO
function excluir(i) {
    agenda.splice((i - 1), 1);
    document.getElementById('tabela').deleteRow(i)}