
const pessoas = [
  { id: 1, nome: 'Ana' },
  { id: 2, nome: 'Augusto' },
  { id: 3, nome: 'Caio' },
  { id: 4, nome: 'Cynthia' },
  { id: 5, nome: 'Edgard' },
  { id: 6, nome: 'Érika' },
  { id: 7, nome: 'Fernanda' },
  { id: 8, nome: 'Giovana' },
  { id: 9, nome: 'Gustavo' },
  { id: 10, nome: 'Ivete' },
  { id: 11, nome: 'Ligia' },
  { id: 12, nome: 'Lucimara' },
  { id: 13, nome: 'Miguel' },
  { id: 14, nome: 'Patricia' }
];

const perguntasAmigoSecreto = [
  {
    id: 1,
    pergunta: "De 0 a 10, qual a chance do seu amigo secreto esquecer o presente em casa?"
  },
  {
    id: 2,
    pergunta: "De 0 a 10, o quanto seu amigo secreto chega atrasado nos compromissos?"
  },
  {
    id: 3,
    pergunta: "De 0 a 10, o quanto seu amigo secreto é organizado?"
  },
  {
    id: 4,
    pergunta: "De 0 a 10, qual a chance do seu amigo secreto rir no momento mais inadequado?"
  },
  {
    id: 5,
    pergunta: "De 0 a 10, o quanto seu amigo secreto gosta de comer?"
  },
  {
    id: 6,
    pergunta: "De 0 a 10, qual a chance do seu amigo secreto esquecer o próprio celular em algum lugar?"
  },
  {
    id: 7,
    pergunta: "De 0 a 10, o quanto seu amigo secreto é competitivo em jogos?"
  },
  {
    id: 8,
    pergunta: "De 0 a 10, o quanto seu amigo secreto fala alto?"
  },
  {
    id: 9,
    pergunta: "De 0 a 10, qual a chance do seu amigo secreto começar uma conversa com um estranho?"
  },
  {
    id: 10,
    pergunta: "De 0 a 10, o quanto seu amigo secreto gosta de tirar fotos?"
  },
  {
    id: 11,
    pergunta: "De 0 a 10, o quanto seu amigo secreto é dramático?"
  },
  {
    id: 12,
    pergunta: "De 0 a 10, qual a chance do seu amigo secreto dormir no sofá?"
  },
  {
    id: 13,
    pergunta: "De 0 a 10, o quanto seu amigo secreto canta mesmo sem saber a letra?"
  },
  {
    id: 14,
    pergunta: "De 0 a 10, o quanto seu amigo secreto é teimoso?"
  },
  {
    id: 15,
    pergunta: "De 0 a 10, qual a chance do seu amigo secreto rir da própria piada?"
  },
  {
    id: 16,
    pergunta: "De 0 a 10, o quanto seu amigo secreto gosta de filmes ou desenhos?"
  },
  {
    id: 17,
    pergunta: "De 0 a 10, o quanto seu amigo secreto reclama de calor ou frio?"
  },
  {
    id: 18,
    pergunta: "De 0 a 10, qual a chance do seu amigo secreto esquecer onde guardou algo?"
  },
  {
    id: 19,
    pergunta: "De 0 a 10, o quanto seu amigo secreto gosta de brincar com crianças?"
  },
  {
    id: 20,
    pergunta: "De 0 a 10, o quanto seu amigo secreto é paciente?"
  },
  {
    id: 21,
    pergunta: "De 0 a 10, o quanto seu amigo secreto gosta de acordar cedo?"
  },
  {
    id: 22,
    pergunta: "De 0 a 10, qual a chance do seu amigo secreto trocar as palavras quando fala rápido?"
  },
  {
    id: 23,
    pergunta: "De 0 a 10, o quanto seu amigo secreto gosta de jogos de tabuleiro?"
  },
  {
    id: 24,
    pergunta: "De 0 a 10, qual a chance do seu amigo secreto perder a paciência no trânsito?"
  },
  {
    id: 25,
    pergunta: "De 0 a 10, o quanto seu amigo secreto gosta de doces?"
  },
  {
    id: 26,
    pergunta: "De 0 a 10, qual a chance do seu amigo secreto esquecer aniversários?"
  },
  {
    id: 27,
    pergunta: "De 0 a 10, o quanto seu amigo secreto gosta de conversar por mensagem?"
  },
  {
    id: 28,
    pergunta: "De 0 a 10, o quanto seu amigo secreto é competitivo em esportes?"
  },
  {
    id: 29,
    pergunta: "De 0 a 10, qual a chance do seu amigo secreto contar a mesma história mais de uma vez?"
  },
  {
    id: 30,
    pergunta: "De 0 a 10, o quanto seu amigo secreto gosta de viajar?"
  },
  {
    id: 31,
    pergunta: "De 0 a 10, qual a chance do seu amigo secreto rir de memes antigos?"
  },
  {
    id: 32,
    pergunta: "De 0 a 10, o quanto seu amigo secreto gosta de ficar em casa?"
  },
  {
    id: 33,
    pergunta: "De 0 a 10, qual a chance do seu amigo secreto se perder mesmo usando GPS?"
  },
  {
    id: 34,
    pergunta: "De 0 a 10, o quanto seu amigo secreto gosta de assistir séries repetidas?"
  },
  {
    id: 35,
    pergunta: "De 0 a 10, qual a chance do seu amigo secreto deixar tudo para a última hora?"
  },
  {
    id: 36,
    pergunta: "De 0 a 10, o quanto seu amigo secreto gosta de aprender coisas novas?"
  },
  {
    id: 37,
    pergunta: "De 0 a 10, qual a chance do seu amigo secreto esquecer o que ia falar no meio da frase?"
  },
  {
    id: 38,
    pergunta: "De 0 a 10, o quanto seu amigo secreto gosta de música?"
  },
  {
    id: 39,
    pergunta: "De 0 a 10, qual a chance do seu amigo secreto fazer várias coisas ao mesmo tempo?"
  },
  {
    id: 40,
    pergunta: "De 0 a 10, o quanto seu amigo secreto gosta de ajudar os outros?"
  },
  {
    id: 41,
    pergunta: "De 0 a 10, qual a chance do seu amigo secreto esquecer de responder mensagens?"
  },
  {
    id: 42,
    pergunta: "De 0 a 10, o quanto seu amigo secreto gosta de brincar com animais?"
  },
  {
    id: 43,
    pergunta: "De 0 a 10, qual a chance do seu amigo secreto rir em momentos silenciosos?"
  },
  {
    id: 44,
    pergunta: "De 0 a 10, o quanto seu amigo secreto gosta de mudanças?"
  },
  {
    id: 45,
    pergunta: "De 0 a 10, qual a chance do seu amigo secreto esquecer onde estacionou o carro?"
  },
  {
    id: 46,
    pergunta: "De 0 a 10, o quanto seu amigo secreto gosta de contar histórias?"
  },
  {
    id: 47,
    pergunta: "De 0 a 10, qual a chance do seu amigo secreto se empolgar demais explicando algo?"
  },
  {
    id: 48,
    pergunta: "De 0 a 10, o quanto seu amigo secreto gosta de surpresas?"
  },
  {
    id: 49,
    pergunta: "De 0 a 10, qual a chance do seu amigo secreto cantarolar sem perceber?"
  },
  {
    id: 50,
    pergunta: "De 0 a 10, o quanto seu amigo secreto gosta de estar com a família?"
  }
];

var pessoasEscolhidas = [];

var quantidade_pessoas = pessoas.length;

function verificar() {

    var participantes = '';

    for (var i = 0; i < quantidade_pessoas; i++) {
        participantes += `${pessoas[i]} <br>`;
    }

    div_participantes.innerHTML = participantes;
}

function sortearParticipante() {
    var participante = document.getElementById("div_participantes");
    participante.style.display = 'none';
    var numeroSorte = (Number(Math.random()) * quantidade_pessoas);
    numeroSorte = parseInt(numeroSorte);
    var primeiroAmigo = '';
    
    // if(pessoasEscolhidas.length > 0) {
    //     pessoasEscolhidas.find((pessoa) => {
    //         if(numeroSorte + 1 == pessoa.id){
    //             sortearParticipante();
    //         }
    //     });
    // }

    console.log(pessoasEscolhidas);

   pessoas.find((pessoa) => {
        if(numeroSorte + 1 == pessoa.id){
            primeiroAmigo = pessoa.nome;
            pessoasEscolhidas.push(pessoa);
        }
   })

    div_sorteio.innerHTML = primeiroAmigo;
}

function sortearPergunta() {
    var numeroSortePergunta = (Number(Math.random()) * perguntasAmigoSecreto.length);
    numeroSortePergunta = parseInt(numeroSortePergunta);
    var perguntaSorteada = '';
    perguntasAmigoSecreto.find((pergunta) => {
        if (numeroSortePergunta + 1 == pergunta.id) {
            perguntaSorteada = pergunta.pergunta;
        }
    });

    div_pergunta.innerHTML = perguntaSorteada;
}