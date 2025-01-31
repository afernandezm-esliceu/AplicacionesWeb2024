//inicialització
_get("calculaFact").onclick = () => executaFuncio(calculaFactorial, "resultat", "num1");
_get("esParell").onclick = () => executaFuncio(esParell, "resultat", "num1");
_get("esMultiplo").onclick = () => executaFuncio(multiplo, "resultat", "num1", "num2");
_get("calculaPot").onclick = () => executaFuncio(potencia, "resultat", "num1", "num2");
_get("calculaRAND").onclick = () => executaFuncio(random, "resultat");
_get("canviColor").onchange = () => canviFons();

//funcions d'ajuda
function _get(idElement) { return document.getElementById(idElement); }

function executaFuncio(funcio, output, input1, input2) {
    var num1 = input1 !== undefined ? parseInt(_get(input1).value) : null;
    var num2 = input2 !== undefined ? parseInt(_get(input2).value) : null;

    var resultat;
    if (num1!=null && num2!=null) {
        resultat = funcio(num1, num2);
    } else if (num1!=null){
        resultat = funcio(num1);
    } else{
        resultat = funcio();
    }

    _get(output).value = resultat;
}
//fi funcions ajuda

//funcions que heu d'implementar
function calculaFactorial(numero) {
    var resultat = 1;
    while(numero>1) resultat *= numero--;
    return resultat;
}

function multiplo(numero1, numero2) {
    if(numero1 % numero2 == 0){
        return "Es multiplo";
    } else {
        return "No es multiplo";
    }
}

function potencia(base, exp) {
    let pot = 1;
    for (let i = 0; i < exp; i++) { 
        pot *= base;
}
    return pot
}

function esParell(num) {
    if(num % 2 == 0){
        return "Es par";
    } else {
        return "No es par";
    }
}

function random() {
    return Math.floor(Math.random() * 256);
}


function canviFons() {
    let r = random();
    let g = random();
    let b = random();

    // Cambiar el fondo de la página
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    window.onload = canviFons;
}