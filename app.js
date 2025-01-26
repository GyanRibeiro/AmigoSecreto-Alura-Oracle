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

        exibirListaDeAmigos();
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

//Função para sortear os nomes da lista e exibir o resultado do sorteio na tela
function sortearAmigo() {
    
    let ListaU = document.getElementById('listaAmigos');
    ListaU.innerHTML = "";

    if (nomeAmigos.length === 0) {
        return;
    } else {
        let resultado = document.getElementById('resultado');
        let indiceAleatorio = Math.floor(Math.random() * nomeAmigos.length);
        let sorteado = nomeAmigos[indiceAleatorio];

        resultado.innerHTML = `O amigo Secreto é: ${sorteado}`;
    }
}