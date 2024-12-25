
var pessoas = ['Ana', 'Augusto', 'Caio', 'Cynthia', 'Edgard', 'Érika', 'Fernanda', 'Giovana', 'Gustavo', 'Ivete', 'Ligia', 'Lucimara', 'Miguel', 'Patricia'];
var quantidade_pessoas = pessoas.length;

function verificar() {

    var participantes = '';

    for (var i = 0; i < quantidade_pessoas; i++) {
        participantes += `${pessoas[i]} <br>`;
    }

    div_participantes.innerHTML = participantes;
}

function sortear() {
    var participante = document.getElementById("div_participantes");
    var numeroSorte = (Number(Math.random()) * quantidade_pessoas);
    numeroSorte = parseInt(numeroSorte);
    var primeiroAmigo = '';

    participante.style.display = 'none';

    console.log(numeroSorte);

    for (var i = 0; i < quantidade_pessoas; i++) {
        if (numeroSorte == i) {
            primeiroAmigo = pessoas[i];
            break;
        }
    }

    div_sorteio.innerHTML = primeiroAmigo;
}