/*A partir de un Array con un listado de países, realiza lo siguiente:*/
var paises = ["España", "Argentina", "Alemania", "Inglaterra", "Francia"];
//Enseña el número de elementos de un Array:
function numeroPaises() {
    var div = document.getElementById("numPaises");
    var inHTML = div.innerHTML;
    inHTML += "<p>" + paises.length + "</p>";
    div.innerHTML = inHTML;
}
numeroPaises();
//Enseña todos los países:
function mostrarPaises() {
    var div = document.getElementById("mostrarPaises");
    var inHTML = div.innerHTML;
    for (var i = 0; i < paises.length; i++) {
        inHTML += "<p>" + paises[i] + "</p>";
    }
    div.innerHTML = inHTML;
}
mostrarPaises();
//Enseña todos los países en sentido inverso (Ojo, que el Array original no quede modificado, es decir, que no quede ordenado al revés):
function inversaPaises() {
    var div = document.getElementById("inversaPaises");
    var inHTML = div.innerHTML;
    for (var i = paises.length - 1; i >= 0; i--) {
        inHTML += "<p>" + paises[i] + "</p>";
    }
    div.innerHTML = inHTML;
}
inversaPaises();
//Añade un país al comienzo del Array:
function añadirInicio() {
    var div = document.getElementById("añadirInicio");
    var inHTML = div.innerHTML;
    paises.unshift("Suecia", "Italia");
    inHTML += "<p>" + paises + "</p>";
    div.innerHTML = inHTML;
}
añadirInicio();
//Añade un país al final del Array:
function añadirFinal() {
    var div = document.getElementById("añadirFinal");
    var inHTML = div.innerHTML;
    paises.push("Bélgica");
    inHTML += "<p>" + paises + "</p>";
    div.innerHTML = inHTML;
}
añadirFinal();
//Elimina un elemento al comienzo del Array e indica cual fue:
function quitarInicio() {
    var div = document.getElementById("eliminarInicio");
    var inHTML = div.innerHTML;
    var eliminado = paises.shift();
    inHTML += "<p>El país eliminado de la lista es: " + eliminado +
        "<p>" + paises + "</p>";
    div.innerHTML = inHTML;
}
quitarInicio();
//Elimina un elemento al final del Array e indica cual fue:
function quitarFinal() {
    var div = document.getElementById("eliminarFinal");
    var inHTML = div.innerHTML;
    var eliminado = paises.pop();
    inHTML += "<p>El país eliminado de la lista es: " + eliminado +
        "<p>" + paises + "</p>";
    div.innerHTML = inHTML;
}
quitarFinal();
//Enseña el elemento que se encuentre en la posición que te indique el usuario:
function elemento() {
    var div = document.getElementById("div-elemento");
    var inHTML = div.innerHTML;
    var input = document.getElementById("elemento");
    var posicion = parseInt(input.value);
    if (!posicion) {
        inHTML += " ";
    }
    else {
        inHTML += "<p>" + paises[posicion] + "</p>";
    }
    div.innerHTML = inHTML;
}
elemento();
//Enseña la posición en la que se encuentra un elemento indicado por el usuario:
function posicion() {
    var div = document.getElementById("div-posicion");
    var inHTML = div.innerHTML;
    var input = document.getElementById("posicion");
    var elemento = input.value;
    for (var i = 0; i < paises.length; i++) {
        if (paises[i] == elemento) {
            inHTML += "<p>" + i + "</p>";
        }
    }
    div.innerHTML = inHTML;
}
posicion();
//Enseña elementos que se encuentran entre dos posiciones indicadas por el usuario:
function positions() {
    var div = document.getElementById("div-positions");
    var inHTML = div.innerHTML;
    var input1 = document.getElementById("posicion1");
    var input2 = document.getElementById("posicion2");
    var posicion1 = parseInt(input1.value);
    var posicion2 = parseInt(input2.value);
    for (var i = posicion1; i <= posicion2; i++) {
        inHTML += "<p>" + paises[i] + "</p>";
    }
    div.innerHTML = inHTML;
}
