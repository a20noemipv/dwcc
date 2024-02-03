/*A partir de un Array con un listado de países, realiza lo siguiente:*/

let paises = ["España", "Argentina", "Alemania", "Inglaterra", "Francia"];

//Enseña el número de elementos de un Array:

function numeroPaises() {
    let div = document.getElementById("numPaises");
    let inHTML = div.innerHTML;
    inHTML += "<p>" + paises.length + "</p>";
    div.innerHTML = inHTML;
}
numeroPaises();

//Enseña todos los países:

function mostrarPaises() {
    let div = document.getElementById("mostrarPaises");
    let inHTML = div.innerHTML;
    for (let i = 0; i < paises.length; i++) {
        inHTML += "<p>" + paises[i] + "</p>";
    }
    div.innerHTML = inHTML;
}
mostrarPaises();

//Enseña todos los países en sentido inverso (Ojo, que el Array original no quede modificado, es decir, que no quede ordenado al revés):

function inversaPaises() {
    let div = document.getElementById("inversaPaises");
    let inHTML = div.innerHTML;
    for (let i = paises.length - 1; i >= 0; i--) {
        inHTML += "<p>" + paises[i] + "</p>";
    }
    div.innerHTML = inHTML;
}
inversaPaises();

//Añade un país al comienzo del Array:

function añadirInicio() {
    let div = document.getElementById("añadirInicio");
    let inHTML = div.innerHTML;
    paises.unshift("Suecia", "Italia");
    inHTML += "<p>" + paises + "</p>";
    div.innerHTML = inHTML;
}
añadirInicio();

//Añade un país al final del Array:

function añadirFinal() {
    let div = document.getElementById("añadirFinal");
    let inHTML = div.innerHTML;
    paises.push("Bélgica");
    inHTML += "<p>" + paises + "</p>";
    div.innerHTML = inHTML;
}
añadirFinal();

//Elimina un elemento al comienzo del Array e indica cual fue:

function quitarInicio() {
    let div = document.getElementById("eliminarInicio");
    let inHTML = div.innerHTML;
    let eliminado = paises.shift();
    inHTML +=   "<p>El país eliminado de la lista es: " + eliminado + 
                "<p>" + paises + "</p>";
    div.innerHTML = inHTML;
}
quitarInicio();

//Elimina un elemento al final del Array e indica cual fue:

function quitarFinal() {
    let div = document.getElementById("eliminarFinal");
    let inHTML = div.innerHTML;
    let eliminado = paises.pop();
    inHTML +=   "<p>El país eliminado de la lista es: " + eliminado + 
                "<p>" + paises + "</p>";
    div.innerHTML = inHTML;
}
quitarFinal();

//Enseña el elemento que se encuentre en la posición que te indique el usuario:

function elemento() {
    let div = document.getElementById("div-elemento");
    let inHTML = div.innerHTML;
    let posicion = parseInt(document.getElementById("elemento").value);
    if(!posicion){
        inHTML += " ";
    }else{
        inHTML += "<p>" + paises[posicion] + "</p>";
    }
    div.innerHTML = inHTML;
}
elemento();

//Enseña la posición en la que se encuentra un elemento indicado por el usuario:

function posicion() {
    let div = document.getElementById("div-posicion");
    let inHTML = div.innerHTML;
    let elemento = document.getElementById("posicion").value;
    for(let i = 0; i < paises.length; i++){
        if(paises[i] == elemento){
            inHTML += "<p>" + i + "</p>";
        }
    }
    div.innerHTML = inHTML;
}
posicion();

//Enseña elementos que se encuentran entre dos posiciones indicadas por el usuario:

function positions() {
    let div = document.getElementById("div-positions");
    let inHTML = div.innerHTML;
    let posicion1 = parseInt(document.getElementById("posicion1").value);
    let posicion2 = parseInt(document.getElementById("posicion2").value);
    for (let i = posicion1; i <= posicion2; i++) {
        inHTML += "<p>" + paises[i] + "</p>";
    }
    div.innerHTML = inHTML;
}