function timeToSeconds (time) {
    const [hours, minutes] = time.split (':').map (Number); //Split divide la cadena en dos partes desde el : y map convierte los elementos en números
    return (hours * 3600) + (minutes * 60); // Pasa las horas a segundos y los minutos a segundos
}

function secondsToMinutes(seconds) {
    return seconds / 60;
 }

 function getTime() { // Obtiene los valores de los inputs. 
    const resultText = document.getElementById("result");
    const timeValue = document.getElementById("timeInput").value;
    const conversionType = document.getElementById("conversionType").value;
    
    if (timeValue) {
        const seconds = timeToSeconds(timeValue); // Convertir a segundos
 
 
        let result; // Define el resultado. Si se selecciona segundos el resultado será en segundos y sino en minutos
        if (conversionType === "seconds") {
            result = seconds;
        } else if (conversionType === "minutes") {
            result = secondsToMinutes(seconds);
        }
 
 
        resultText.textContent = `El tiempo es ${result} ${conversionType === "seconds" ? "segundos" : "minutos"}`;
    } else {
        alert("Por favor, selecciona una hora.");
    }
 
 }

 function ChangeBG() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
 }
 
 function cambiarFondo() {
    const card = document.querySelector(".card-body");
    const color = ChangeBG();

    card.style.backgroundColor = color;
    card.style.border = `3px solid ${color}`;
    
 }

 cambiarFondo();

 let contador = 0; // Definir fuera para que no se reinicie

 function contarClics() {
     contador++;
     document.getElementById("contador").textContent = contador;
 }

 document.getElementById("boton").addEventListener("click", contarClics);