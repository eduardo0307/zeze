document.getElementById("formCadastro").addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem");

    if (nome && email) {
        mensagem.textContent = `Obrigado por se cadastrar, ${nome}!`;
        mensagem.style.color = "green";
        document.getElementById("formCadastro").reset();
    } else {
        mensagem.textContent = "Preencha todos os campos!";
        mensagem.style.color = "red";
    }
});

// Sistema de Comentários
document.getElementById("formComentario").addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nomeComentario").value;
    const comentario = document.getElementById("comentario").value;
    const listaComentarios = document.getElementById("listaComentarios");

    if (nome && comentario) {
        const novoComentario = document.createElement("p");
        novoComentario.innerHTML = `<strong>${nome}:</strong> ${comentario}`;
        listaComentarios.appendChild(novoComentario);

        document.getElementById("formComentario").reset();
    }
});

document.addEventListener('DOMContentLoaded', function(){
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');

    let tamanhoAtualFonte = 1;
    aumentaFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;

    });
});

document.addEventListener('DOMContentLoaded', function(){
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');

    let tamanhoAtualFonte = 1;
    aumentaFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;

    });

    diminuiFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;

    });

});

const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade')
const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade')

botaoDeAcessibilidade.addEventListener('click', function (){
    botaoDeAcessibilidade.classList.toggle('rotacao-botao');
    opcoesDeAcessibilidade.classList.toggle('apresenta-lista')
   })
