const boton1 = document.querySelector("#boton1");
const mensaje = document.querySelector("#mensaje");
const footer = document.querySelector("footer");
const btnIniciarIntervalo = document.querySelector("#btnIniciarIntervalo");
const reloj = document.querySelector("#reloj");
btnIniciarIntervalo.onclick = iniciarIntervalo;
boton1.onclick = tocame;
let contador = 0;

function tocame(){
    contador++;
    var veces = (contador==1)?"vez":"veces";

    boton1.textContent = "Me han tocado " + contador + " veces."
}

function saludo(){
    var autor = footer.textContent;
    autor = autor.trim().replace("", "")
    mensaje.textContent = "Hola" + autor;
}

function calcula(){
    var primer = document.querySelector("#primer").value;
    var segon = document.querySelector("#segon").value;
    var operacio = document.querySelector("#operaciones").value;

    if (primer == "") primer = 0;
    if (segon == "") segon = 0;

    var resultadoOperacion = parseInt(primer) + parseInt(segon);
    if (operaciones == "+") resultadoOperacion = suma(primer, segon);
    else if (operaciones == "-") resultadoOperacion = resta(primer, segon);

    document.querySelector("#resultat").value= resultadoOperacion;
}

function suma(a, b){
    return a+b;
}

function resta (a, b){
    return a-b
}

function generarNumeroAleatorio(){
    return parseInt(Math.random()*1000)
}

var intervalo;

function pintaNumerosAleatorios(){
    var valor = generarNumeroAleatorio();
    mensaje.textContent = valor;
    if (valor == 999) clearInterval(intervalo);
}

function iniciarIntervalo(){
    intervalo = setInterval(pintaNumerosAleatorios, 1);
};

function paraIntervalo(){
    clearInterval(intervalo);
    intervalo = null
}

function pintaReloj(){
    segundos++;
    if (segundos >= 60) minutos++;
    pintaReloj.textContent = `${minutos}:${segundos}`;
}

function iniciarReloj(){
    setInterval(pintaReloj, 1000);
}