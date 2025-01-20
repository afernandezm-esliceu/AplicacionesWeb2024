const boton1 = document.querySelector("#boton1");

boton1.onclick = tocame;
let contador = 0;

function tocame(){
    contador++;
    var veces = (contador==1)?"vez":"veces";

    boton1.textContent = "Me han tocado " + contador + " veces."
}