// Elementos del DOM
const palabraElemento = document.getElementById("wordContainer");
const letrasUsadasElemento = document.getElementById("usedLetters");
const imagenAhorcado = document.querySelector("#contenedor-central img");
const botonInicio = document.getElementById("startButton");
const botonPista = document.getElementById("pista");
const dificultadElemento = document.getElementById("dif");
const tiempoElemento = document.getElementById("contadorTiempo");
const resumenElemento = document.getElementById("resumen");
const logElemento = document.getElementById("contenedorLog");
const intentosElemento = document.getElementById("intentos");

// Variables de juego


let palabraSecreta = "";
let letrasAdivinadas = [];
let letrasErradas = [];
let intentosRestantes = 6;
let tiempo = 0;
let temporizador;
let juegoEnCurso = false;
let pistaDisponible = false;
let partidasGanadas = 0;
let partidasPerdidas = 0;

// Lista de palabras
const palabras = ["GATO", "FRANK", "LOU", "DANI", "AGUS", "MARIO"];

// Función para iniciar el juego
function iniciarJuego() {
    if (juegoEnCurso) return;

    palabraSecreta = palabras[Math.floor(Math.random() * palabras.length)];
    letrasAdivinadas = Array(palabraSecreta.length).fill("_");
    letrasErradas = [];
    intentosRestantes = 6;
    tiempo = 0;
    pistaDisponible = false;
    juegoEnCurso = true;

    let dificultad = dificultadElemento.value;
    if (dificultad === "facil") {
        revelarLetra();
        revelarLetra();
        pistaDisponible = true;
    } else if (dificultad === "medio") {
        pistaDisponible = true;
    }

    botonPista.disabled = !pistaDisponible;
    dificultadElemento.disabled = true;

    actualizarPalabra();
    letrasUsadasElemento.textContent = "";
    actualizarIntentos();
    actualizarImagen();
    logElemento.innerHTML = "";

    clearInterval(temporizador);
    tiempoElemento.textContent = "Tiempo: 0s";
    temporizador = setInterval(() => {
        tiempo++;
        tiempoElemento.textContent = `Tiempo: ${tiempo}s`;
    }, 1000);

    botonInicio.textContent = "Finalizar Partida";
    botonInicio.classList.add("rojo");
    log("¡Juego iniciado!");
}

function finalizarJuego(ganaste) {
    juegoEnCurso = false;
    clearInterval(temporizador);
    dificultadElemento.disabled = false;
    botonInicio.textContent = "Iniciar Partida";
    botonInicio.classList.remove("rojo");
    botonPista.disabled = true;

    if (ganaste) {
        partidasGanadas++;
        log("¡Ganaste!");
    } else {
        partidasPerdidas++;
        log(`Perdiste. La palabra era: ${palabraSecreta}`);
    }

    actualizarResumen();
}

// Esto actualiza todo el contenedor resumen
function actualizarResumen() {
    resumenElemento.innerHTML = `
        <h2 class="titulos">Resumen</h2>
        <p id="intentos" class="texto">Intentos restantes: ${intentosRestantes}</p>
        <p id="ganadas" class="texto">Ganadas: ${partidasGanadas}</p>
        <p id="perdidas" class="texto">Perdidas: ${partidasPerdidas}</p>
    `;
}

// Función para actualizar la palabra en pantalla
function actualizarPalabra() {
    palabraElemento.innerHTML = letrasAdivinadas.join(" ");
}

function actualizarIntentos() {
    intentosElemento.textContent = `Intentos restantes: ${intentosRestantes}`;
}

// Función para manejar teclas presionadas
document.addEventListener("keydown", (evento) => {
    if (!juegoEnCurso) return;
    let letra = evento.key.toUpperCase();
    if (/^[A-ZÑ]$/.test(letra) && !letrasAdivinadas.includes(letra) && !letrasErradas.includes(letra)) {
        procesarLetra(letra);
    }
});

// Función para verificar la letra ingresada
function procesarLetra(letra) {
    if (palabraSecreta.includes(letra)) {
        for (let i = 0; i < palabraSecreta.length; i++) {
            if (palabraSecreta[i] === letra) {
                letrasAdivinadas[i] = letra;
            }
        }
        log(`Letra correcta: ${letra}`);
    } else {
        letrasErradas.push(letra);
        intentosRestantes--;
        letrasUsadasElemento.textContent = letrasErradas.join(", ");
        actualizarImagen();
        log(`Letra incorrecta: ${letra}`);
    }

    actualizarPalabra();
    actualizarIntentos();
    verificarEstado();
}

// Función para verificar si el juego terminó
function verificarEstado() {
    if (!letrasAdivinadas.includes("_")) {
        finalizarJuego(true);
    } else if (intentosRestantes === 0) {
        finalizarJuego(false);
    }
}

// Función para actualizar la imagen del ahorcado
function actualizarImagen() {
    let numImagen = 7 - intentosRestantes;
    imagenAhorcado.src = `img/img0${numImagen}.svg`;
}

// Función para revelar una letra al inicio
function revelarLetra() {
    let indices = [];
    for (let i = 0; i < palabraSecreta.length; i++) {
        if (letrasAdivinadas[i] === "_") {
            indices.push(i);
        }
    }
    if (indices.length > 0) {
        let indice = indices[Math.floor(Math.random() * indices.length)];
        letrasAdivinadas[indice] = palabraSecreta[indice];
    }
}

// Función para registrar eventos en el log
function log(mensaje) {
    logElemento.innerHTML += `<p>${mensaje}</p>`;
}

// Eventos de botones
botonInicio.addEventListener("click", () => {
    if (juegoEnCurso) {
        finalizarJuego(false);
    } else {
        iniciarJuego();
    }
});

// Función para pedir una pista
function pedirPista() {
    if (!pistaDisponible || !juegoEnCurso) return;

    let indices = [];
    for (let i = 0; i < palabraSecreta.length; i++) {
        if (letrasAdivinadas[i] === "_") {
            indices.push(i);
        }
    }

    if (indices.length > 0) {
        let indiceAleatorio = indices[Math.floor(Math.random() * indices.length)];
        letrasAdivinadas[indiceAleatorio] = palabraSecreta[indiceAleatorio];
        actualizarPalabra();
        intentosRestantes--;
        actualizarImagen();
        actualizarIntentos();
        pistaDisponible = false;
        botonPista.disabled = true;
        log("Se usó una pista. Perdiste un intento.");

        verificarEstado();
    }
}

botonPista.addEventListener("click", pedirPista);
