function color() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

let interval;

function factorial(n) {
    if (n < 0) return "ERROR"; // No hay factorial para números negativos
    let resultado = 1;
    for (let i = 1; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

function calculadora() {
    clearInterval(interval);

    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    const resultado = document.getElementById("resultado");
    const opciones = document.getElementById("opciones").value;
    const fondo = document.getElementById("calculadoraFascista");

    const sum = num1 + num2;
    const restar = num1 - num2;
    const multiplicar = num1 * num2;
    const dividir = num1 / num2;
    const factoriaal = factorial(num1); // Llamamos correctamente a la función

    if (dividir === Infinity) {
        interval = setInterval(() => {
            fondo.style.backgroundColor = color();
        }, 500);
    }

    if (opciones === "factorial") {
        if (isNaN(num1)) {
            resultado.textContent = "ERROR";
        } else {
            resultado.textContent = factoriaal;
        }
        return;
    }

    if (isNaN(num1) || isNaN(num2)) {
        resultado.textContent = "ERROR";
        return;
    }

    if (opciones === "sumar") {
        resultado.textContent = sum;
    } else if (opciones === "restar") {
        resultado.textContent = restar;
    } else if (opciones === "multiplicar") {
        resultado.textContent = multiplicar;
    } else if (opciones === "dividir") {
        resultado.textContent = dividir;
    }
}



function iniciarNumeros() {
    const numerito = document.getElementById('numerito');
    const numAle = parseInt(Math.floor(Math.random() * 10000));
    
    numerito.textContent = numAle
}

let intervalo;

function iniciarIntervalo() {
    if (!intervalo) {
        intervalo = setInterval(iniciarNumeros, 100);
    }
}

function pararNumeros() {
    clearInterval(intervalo);
    intervalo = null;
}

function enviarTexto() {
    const textoAñadido = document.getElementById("textoAñadido");
    const textoAqui = document.getElementById("textoAqui").value;

    if (textoAñadido.trim() !=="") {
        textoAqui.textContent += ","+textoAñadido;
    } else {
        textoAqui.textContent = textoAñadido;
    }
    document.getElementById('textoAñadido').value = ""; 
}