window.onload = function() {
    //nos avisa cuando la pagina web ya esta cargada
    this.console.log('Pagina cargada');
};

let btnprobar = document.getElementById('btnprobar');
let numingresado = document.getElementById('numingresado');
let intentos = document.getElementById('intentos');
let listaIntentos = [];
let cantidadIntentos = 1;
let intentosfaltantes = 9;
let numeroAleatorio = Math.floor(Math.random() * 100) + 1;

let result_box = document.getElementById("result_box");

function calcular(numero, valoringresado) {
    if (cantidadIntentos > 10) {
        result_box.innerHTML = 'Usted ya supero los 10 intentos permitidos!';
        return false;
    }

    listaIntentos.push(valoringresado);

    if (numero == valoringresado) {
        result_box.innerHTML = '¡Felicitaciones, ha ganado el juego!';

    } else {
        if (valoringresado > numero)
            result_box.innerHTML = 'Ups no tuvimos suerte. Elige un numero mas chico';
        else
            result_box.innerHTML = 'Ups no tuvimos suerte. Elige un numero mas grande';
    }
    cantidadIntentos++;
    numeros_ingresados.innerHTML = listaIntentos;
    intentos.innerHTML = intentosfaltantes--;
}

btnprobar.addEventListener('click', function() {
    let x = numingresado.value;
    calcular(numeroAleatorio, x);
    numingresado.value = "";
});