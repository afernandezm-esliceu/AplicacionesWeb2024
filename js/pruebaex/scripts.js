function tiempoASegundos(time) { // Creación de la función
    const [hours, minutes] = time.split(':').map(Number); // .split divide la cadena de tiempo en un array con dos valores. Horas y segundos. Y .map convierte cada elemento del array en numero
    return (hours * 3600) + (minutes *60);
}

function segundosAMinutos (seconds) {
    return seconds / 60;
}

function tomaTiempo() {
    const resultadoTexto = document.getElementById("resultado");
    const valorTiempo = document.getElementById("tiempoInput").value;
    const conversionType = document.getElementById("conversionType").value;

    if (valorTiempo) {
        const seconds = tiempoASegundos(valorTiempo);

        let resultado;
        if (conversionType === "seconds") {
            resultado = seconds;
        } else if (conversionType === "minutes") {
            resultado = segundosAMinutos(seconds);
        }
        resultadoTexto.textContent = `El tiempo es ${resultado} ${conversionType === "seconds" ? "segundos" : "minutos"}`;
    } else {
        alert("Por favor, selecciona una hora.")
    }
}

const edad = document.getElementById("edad");
const aviso = document.getElementById("texto");

function comprobarEdad() {
    edadValor = parseInt(edad.value);

    if (edadValor < 18) {
        aviso.textContent = "NO TIENES 18 AÑOS";
    } else {
        aviso.textContent = "TIENES 18 AÑOS O MAS";
    }
}

function factorial() { // Hacer el fatorial de un numero
    const numFact = parseInt(document.getElementById("numFact").value); // Coge el input del HTML y lo vuelve un numero entero con .parseInt y con .value da el valor
    const resultadoFact = document.getElementById("resultadoFact"); // Coge el id del DIV vacío donde mas tarde pondremos el resultado del factorial

    let factorial = 1; // El factorial empieza en 1

    for (let i = 1; i <= numFact; i++) {
        factorial*= i;
    }

    resultadoFact.textContent = `El factorial de ${numFact} es: ${factorial}`;
}

function enviarTexto() {
    var nuevoTexto = document.getElementById("nuevoTextoAqui");
    var texto = document.getElementById("textoIntroducido").value; // Obtiene el texto del input

    if (texto.trim() !== "") { // Evita agregar texto vacío
        var nuevoParrafo = document.createElement("p"); // Crea un párrafo en vez de un div
        nuevoParrafo.textContent = texto; // Añade el contenido

        nuevoTexto.appendChild(nuevoParrafo); // Añade el párrafo al div existente
    }

    document.getElementById("textoIntroducido").value = ""; // Limpia el input después de enviar
}


function aleatorio() {
    const divBlank = document.getElementById("numerosAleatorios")

    const numero = Math.floor(Math.random() * 256);

    divBlank.textContent = numero

}

function sumatorio() {
    const num1 = parseInt(document.getElementById("sumatorio1").value);
    const num2 = parseInt(document.getElementById("sumatorio2").value);
    const divSuma = document.getElementById("resultadoSuma");

    const resultSuma = num1 + num2

    divSuma.textContent = resultSuma
}

function cambiarColor() {
    const colorDiv = document.getElementById("colorAleatorio");

    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    colorDiv.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}
