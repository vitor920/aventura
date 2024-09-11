const titulo = document.getElementById("pergunta");
const button1 = document.getElementById("button-1");
const button2 = document.getElementById("button-2");
const button3 = document.getElementById("button-3");

const aventura = [
    {
        "Pergunta": "Você se encontra em uma floresta mágica e vê um caminho que se divide em duas direções. O que você faz?",
        "Respostas": ["Seguir o caminho à esquerda", "Seguir o caminho à direita", "Sentar e descansar"],
        "Resposta": 1
    },
    {
        "Pergunta": "Você segue pelo caminho à direita e encontra uma ponte antiga sobre um rio. O que você faz?",
        "Respostas": ["Atravessar a ponte", "Voltar e tentar o caminho à esquerda", "Explorar as margens do rio"],
        "Resposta": 0
    },
    {
        "Pergunta": "Atravessando a ponte, você chega a uma clareira com uma cabana. O que você faz?",
        "Respostas": ["Entrar na cabana", "Continuar explorando a clareira", "Voltar para a ponte"],
        "Resposta": 1
    },
    {
        "Pergunta": "Você decide continuar explorando a clareira e encontra uma caverna escondida. O que você faz?",
        "Respostas": ["Entrar na caverna", "Ignorar a caverna e voltar à clareira", "Seguir o caminho de volta para a floresta"],
        "Resposta": 0
    },
    {
        "Pergunta": "Dentro da caverna, você encontra um baú antigo. O que você faz?",
        "Respostas": ["Abrir o baú", "Deixar o baú e continuar explorando a caverna", "Sair da caverna e voltar para a clareira"],
        "Resposta": 0
    },
    {
        "Pergunta": "Você decide abrir o baú e encontra um mapa antigo. O que você faz?",
        "Respostas": ["Estudar o mapa", "Guardar o mapa e sair da caverna", "Queimar o mapa e continuar explorando"],
        "Resposta": 0
    },
    {
        "Pergunta": "Estudando o mapa, você descobre a localização de um tesouro escondido. O que você faz?",
        "Respostas": ["Seguir as instruções do mapa para encontrar o tesouro", "Guardar o mapa e sair da caverna", "Destruir o mapa e continuar explorando a caverna"],
        "Resposta": 0
    }
];

let faseAtual = 0;

function mostrarPergunta() {
    if (faseAtual >= aventura.length) {
        alert("Fim da história!");
        return;
    }

    let perguntaAtual = aventura[faseAtual];
    titulo.innerText = perguntaAtual.Pergunta;
    button1.innerText = perguntaAtual.Respostas[0];
    button2.innerText = perguntaAtual.Respostas[1];
    button3.innerText = perguntaAtual.Respostas[2];

    button1.onclick = function() {
        if (0 === perguntaAtual.Resposta) {
            faseAtual++;
            mostrarPergunta();
        } else {
            alert("Resposta errada, tente de novo.");
        }
    }

    button2.onclick = function() {
        if (1 === perguntaAtual.Resposta) {
            faseAtual++;
            mostrarPergunta();
        } else {
            alert("Resposta errada, tente de novo.");
        }
    }

    button3.onclick = function() {
        if (2 === perguntaAtual.Resposta) {
            faseAtual++;
            mostrarPergunta();
        } else {
            alert("Resposta errada, tente de novo.");
        }
    }
}

// Começar o jogo
mostrarPergunta();
