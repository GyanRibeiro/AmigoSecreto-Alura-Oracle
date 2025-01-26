let nomeAmigos = [];

//Função para inserir os nomes na lista de sorteio
function adicionarAmigo() {
    let amigo = document.getElementById('amigo').value;

    if(amigo == "") {
        alert("Por favor, insira um nome.");
    } else {
        nomeAmigos.push(amigo);
        console.log(nomeAmigos);
        document.getElementById('amigo').value = ""
    }
    
    // amigo == '' ? alert("Por favor, insira um nome.") : nomeAmigos.push(amigo);
}