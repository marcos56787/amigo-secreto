
//Variável array que armazena meus nomes
let nomes = [];


//Função que adiciona os nomes ao meu Array.
function adicionarAmigo(){
    if (document.getElementById("amigo").value.trim() != ""){
        nomes.push(document.getElementById("amigo").value.trim());
        adicionarNaLista();
        // document.getElementById("amigo").value = '';
    } else{
        alert("O campo está vazio! Por favor insira algo.");
    }
}

//Sorteia um nome a partir da geração aleatoria de um numero, e conecta isso ao codigo do array
function sortearAmigo(){
    let numero = Math.floor(Math.random() * (nomes.length))
    document.getElementById("resultado").innerText = `O amigo sorteado é ${nomes[numero]}`;
    removerLista();
}


//Pega o nome adicionado e coloca ele como um Child li na nossa ur, mostrando-o na tela.
function adicionarNaLista(){
    texto = document.getElementById("amigo").value
    //O .trim() garante que não há espaços antes e depois do texto;
    texto = document.getElementById("amigo").value;
    let ul = document.getElementById("listaAmigos");
    let li = document.createElement("li");
    li.id = "lista";
    ul.appendChild(li);
    li.innerText = texto;
    document.getElementById("amigo").value = " ";
    }


function removerLista(){
    let ul = document.getElementById("listaAmigos");
    //Ele não muda o texto, mas tudo o que tem dentro do HTML! Coisa linda demais!
    ul.innerHTML = '';
}
