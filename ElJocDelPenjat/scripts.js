const time = document.querySelector("#time")

let segundos = 0

function writetime(){
    segundos++

    if (segundos<10) segundos = segundos.toString().padStart(2, "0");

    time.textContent = `Tiempo: ${segundos} segundos`

}

function seetime(){
    setInterval(writetime, 1000);
}

seetime();

