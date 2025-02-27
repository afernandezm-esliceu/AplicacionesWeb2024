let timerInterval;
let seconds = 0;

function startTimer() {
    const contadorTiempo = document.getElementById('contadorTiempo');
    timerInterval = setInterval(() => {
        seconds++;
        const minutes = Math.floor(seconds / 60);
        const displaySeconds = seconds % 60;
        contadorTiempo.textContent = `${minutes.toString().padStart(2, '0')}:${displaySeconds.toString().padStart(2, '0')}`;
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
    seconds = 0;
    document.getElementById('contadorTiempo').textContent = '00:00';
}

document.getElementById('startButton').addEventListener('click', () => {
    stopTimer(); // Reiniciar el temporizador si ya estaba corriendo
    startTimer();
});

document.getElementById('finalizar').addEventListener('click', () => {
    stopTimer();
});

document.addEventListener("DOMContentLoaded", () => {
    const palabras = {
        facil: ["gato", "sol", "luz", "pan"],
        medio: ["barco", "tigre", "lluvia", "nieve"],
        dificil: ["elefante", "astronauta", "mariposa", "tormenta"]
    };
    
    let palabraSecreta = "";
    let palabraOculta = [];
    let intentosRestantes = 6;
    let letrasUsadas = new Set();
    let ganadas = 0;
    let perdidas = 0;
    
    const difSelect = document.getElementById("dif");
    const startButton = document.getElementById("startButton");
    const finalizarButton = document.getElementById("finalizar");
    const pistaButton = document.getElementById("pista");
    const wordContainer = document.getElementById("wordContainer");
    const usedLetters = document.getElementById("usedLetters");
    const intentosTexto = document.getElementById("intentos");
    const ganadasTexto = document.getElementById("ganadas");
    const perdidasTexto = document.getElementById("perdidas");
    
    function iniciarJuego() {
        const dificultad = difSelect.value;
        palabraSecreta = palabras[dificultad][Math.floor(Math.random() * palabras[dificultad].length)];
        palabraOculta = Array(palabraSecreta.length).fill("_");
        
        // Ajustar los intentos restantes según la dificultad
        if (dificultad === "facil") {
            intentosRestantes = 6;
        } else if (dificultad === "medio") {
            intentosRestantes = 3;
        } else if (dificultad === "dificil") {
            intentosRestantes = 6;
        }
        
        letrasUsadas.clear();
        actualizarPantalla();
    }
    
    function actualizarPantalla() {
        wordContainer.textContent = palabraOculta.join(" ");
        usedLetters.textContent = "Letras usadas: " + Array.from(letrasUsadas).join(", ");
        intentosTexto.textContent = `Intentos restantes: ${intentosRestantes}`;
        ganadasTexto.textContent = `Ganadas: ${ganadas}`;
        perdidasTexto.textContent = `Perdidas: ${perdidas}`;
    }
    
    function manejarEntrada(event) {
        let letra = event.key.toLowerCase();
        if (!/^[a-záéíóúüñ]$/.test(letra) || letrasUsadas.has(letra)) return;
        
        letrasUsadas.add(letra);
        
        if (palabraSecreta.includes(letra)) {
            for (let i = 0; i < palabraSecreta.length; i++) {
                if (palabraSecreta[i] === letra) {
                    palabraOculta[i] = letra;
                }
            }
        } else {
            intentosRestantes--;
        }
        
        actualizarPantalla();
        
        if (palabraOculta.join("") === palabraSecreta) {
            setTimeout(() => {
                alert("¡Ganaste!");
                ganadas++;
                iniciarJuego();
            }, 100); // Espera 100ms antes de mostrar la alerta
        } else if (intentosRestantes === 0) {
            setTimeout(() => {
                alert(`Perdiste, la palabra era: ${palabraSecreta}`);
                perdidas++;
                iniciarJuego();
            }, 100); // Espera 100ms antes de mostrar la alerta
        }
    }
    
    function pedirPista() {
        for (let i = 0; i < palabraSecreta.length; i++) {
            if (palabraOculta[i] === "_") {
                palabraOculta[i] = palabraSecreta[i];
                break;
            }
        }
        intentosRestantes--;
        actualizarPantalla();
    }
    
    function finalizarJuego() {
        palabraSecreta = "";
        palabraOculta = [];
        letrasUsadas.clear();
        intentosRestantes = 6;
        actualizarPantalla();
    }
    
    startButton.addEventListener("click", iniciarJuego);
    pistaButton.addEventListener("click", pedirPista);
    finalizarButton.addEventListener("click", finalizarJuego);
    document.addEventListener("keydown", manejarEntrada);
});