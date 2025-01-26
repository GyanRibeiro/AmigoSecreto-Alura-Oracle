let nomeAmigos = [];

//Função para inserir os nomes na lista de sorteio
function adicionarAmigo() {
    let amigo = document.getElementById('amigo').value;

    if(amigo == "") {
        alert("Por favor, insira um nome.");
    } else {
        nomeAmigos.push(amigo);
        console.log(nomeAmigos);
        document.getElementById('amigo').value = "";

        exibirListaDeAmigos()
    }
    
    // amigo == '' ? alert("Por favor, insira um nome.") : nomeAmigos.push(amigo);
}

//Função para mostrar os nomes da lista na tela
function exibirListaDeAmigos() {
    let ListaU = document.getElementById('listaAmigos');
    ListaU.innerHTML = "";

    nomeAmigos.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = item;
        ListaU.appendChild(li);
    });
}