let lista = ["dia", "professor", "casa"];
let chances = 6;
let img = 0;


let i = 0;
function id() {
    return i++;
}

function sorteio() {
    let input = document.createElement("input");
    input.setAttribute('id', 'palavra' + id());
    input.setAttribute('class', 'input');
    input.setAttribute('type', 'input');

    let div = document.getElementById("sorteio");
    div.appendChild(input);

}

let posicao = Math.floor(Math.random() * lista.length);
let palavra = lista[posicao];

function palavraS() {
    for (let i = 0; i < palavra.length; i++) {
        let span = document.createElement("span");
        span.setAttribute('id', i);

        let div = document.getElementById("palavra");
        div.appendChild(span);
    }
}

let alfabeto = "abcdefghijklmnopqrstuvwxyz";
let letra = alfabeto.split("");


function criarBotao() {
    for (let i = 0; i < letra.length; i++) {
        let botao = document.createElement("button");
        botao.setAttribute('id', letra[i]);
        botao.innerText = letra[i];
        botao.setAttribute('onclick', 'jogo(\'' + letra[i] + '\')');

        let div = document.getElementById("teclado");
        div.appendChild(botao);
    }
}

let aux = 0;

function jogo(id) {
    let aux1 = false;

    for (let i = 0; i < palavra.length; i++) {
        if (id == palavra[i]) {
            let span = document.getElementById(i);
            let aux3 = document.createTextNode(id);

            span.appendChild(aux3);

            aux++;
            aux1 = true;

            let div = document.getElementById("palavra");
            div.appendChild(span);

            if (aux == palavra.length) {
                reloading();
            }
        } else {
            let span = document.getElementById(i);
            let aux3 = document.createTextNode("");

            span.appendChild(aux3);

            let div = document.getElementById("palavra");
            div.appendChild(span);
        }
    }

    if (aux1 == false) {
        chances--;
    }

    if (chances == 5) {
        img = 2;
    } else if (chances == 4) {
        img = 3;
    } else if (chances == 3) {
        img = 4;
    } else if (chances == 2) {
        img = 5;
    } else if (chances == 1) {
        img = 6;
    } else if (chances == 0) {
        img = 7;
        reloading();
    }

    document.getElementById("img").src = "images/forca0" + img + ".png";
    let button = document.getElementById(id);
    button.setAttribute('class', 'ok');
    button.removeAttribute('onclick');
}

function reloading() {
    let botao = document.createElement("button");
    botao.setAttribute('id', 'njogo');
    botao.innerText = "Novo Jogo";
    botao.setAttribute('onclick', 'window.location.reload()');

    let h2 = document.createElement("h2");
    h2.innerText = "A palavra era: " + palavra + "!";


    let div = document.getElementById('mensagem');
    div.appendChild(botao);
    div.appendChild(h2);

}

function rodar() {
    sorteio();
    palavraS();
    criarBotao();
}

rodar();