var texto = "hola mundo";
console.log(texto);

texto = "Adios Mundo";
console.log(texto)

var a = 1
var b = 10

console.log(a + b)

if (a>b) {
    console.log("a es mayor que b");

} else if(b<a){
    console.log("b es mayor que a");
} else {
    console.log("IGUALDAD");
}

// b vale 5

while (b>0){
    console.log("b vale: " + b-1);
    b--;
}

b=5
for (var i=b; i>0; i--){
    console.log("b vale: " +i);
}

var c;
console.log(c)
c= 1;

if (c>0){
    console.log("C es mayor que 0")
}

var lista = ["Pedro", "Dani"];

console.log(lista[0])
console.log(lista[1])

lista[1] = "Vico";

console.log(lista[1])

lista.push("Agus");

console.log(lista)

for (i=0; i<lista.length; i++){
    console.log(lista[i] + " tiene un 10.")
}

var lista2 = [1, 2, 3, 4, "Daniel"]

for (i=0; i<lista2.length; i++){
    if (lista[i]==undefined) continue;
    if(!isNaN(lista2[i])){
        console.log("La posición " + i + " es un numero y vale" + lista2[i] + ".")
    } else{
        console.log("La posición " + i + "  NO es un numero y vale" + lista2[i] + ".")
    }
}

function excelente(nombre){
    console.log(nombre + " tiene un 10.");
}

var edad = prompt("Cual es tu edad?")

if(isNaN(edad)){
    edad = prompt("No has introducido un numero. Cual es tu edad?")
} else {

if(edad >=18){
    alert("Eres mayor de edad");
} else{
    alert("No puedes acceder a este sitio web");
}
}