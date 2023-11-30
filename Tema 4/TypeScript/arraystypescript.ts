/*A partir de un Array con un listado de países, realiza lo siguiente:*/

let paises = ["España", "Argentina", "Alemania", "Inglaterra", "Francia"];

//Enseña el número de elementos de un Array:

function numeroPaises() {
    let div : any = document.getElementById("numPaises");
    let inHTML : any = div.innerHTML;
    inHTML += "<p>" + paises.length + "</p>";
    div.innerHTML = inHTML;
}
numeroPaises();

//Enseña todos los países:

function mostrarPaises() {
    let div : any = document.getElementById("mostrarPaises");
    let inHTML :any = div.innerHTML;
    for (let i : number = 0; i < paises.length; i++) {
        inHTML += "<p>" + paises[i] + "</p>";
    }
    div.innerHTML = inHTML;
}
mostrarPaises();

//Enseña todos los países en sentido inverso (Ojo, que el Array original no quede modificado, es decir, que no quede ordenado al revés):

function inversaPaises() {
    let div : any = document.getElementById("inversaPaises");
    let inHTML : any = div.innerHTML;
    for (let i : number = paises.length - 1; i >= 0; i--) {
        inHTML += "<p>" + paises[i] + "</p>";
    }
    div.innerHTML = inHTML;
}
inversaPaises();

//Añade un país al comienzo del Array:

function añadirInicio() {
    let div : any = document.getElementById("añadirInicio");
    let inHTML : any = div.innerHTML;
    paises.unshift("Suecia", "Italia");
    inHTML += "<p>" + paises + "</p>";
    div.innerHTML = inHTML;
}
añadirInicio();

//Añade un país al final del Array:

function añadirFinal() {
    let div : any = document.getElementById("añadirFinal");
    let inHTML : any = div.innerHTML;
    paises.push("Bélgica");
    inHTML += "<p>" + paises + "</p>";
    div.innerHTML = inHTML;
}
añadirFinal();

//Elimina un elemento al comienzo del Array e indica cual fue:

function quitarInicio() {
    let div : any = document.getElementById("eliminarInicio");
    let inHTML : any = div.innerHTML;
    let eliminado : string | undefined = paises.shift();
    inHTML +=   "<p>El país eliminado de la lista es: " + eliminado + 
                "<p>" + paises + "</p>";
    div.innerHTML = inHTML;
}
quitarInicio();

//Elimina un elemento al final del Array e indica cual fue:

function quitarFinal() {
    let div : any = document.getElementById("eliminarFinal");
    let inHTML : any = div.innerHTML;
    let eliminado : string | undefined = paises.pop();
    inHTML +=   "<p>El país eliminado de la lista es: " + eliminado + 
                "<p>" + paises + "</p>";
    div.innerHTML = inHTML;
}
quitarFinal();

//Enseña el elemento que se encuentre en la posición que te indique el usuario:

function elemento() {
    let div : any = document.getElementById("div-elemento");
    let inHTML : any = div.innerHTML;
    let input : any = document.getElementById("elemento")
    let posicion : number  = parseInt(input.value);
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
    let div : any = document.getElementById("div-posicion");
    let inHTML : any = div.innerHTML;
    let input : any = document.getElementById("posicion");
    let elemento : any = input.value;
    for(let i : number = 0; i < paises.length; i++){
        if(paises[i] == elemento){
            inHTML += "<p>" + i + "</p>";
        }
    }
    div.innerHTML = inHTML;
}
posicion();

//Enseña elementos que se encuentran entre dos posiciones indicadas por el usuario:

function positions() {
    let div : any = document.getElementById("div-positions");
    let inHTML : any = div.innerHTML;
    let input1 : any = document.getElementById("posicion1");
    let input2 : any = document.getElementById("posicion2");
    let posicion1 : number = parseInt(input1.value);
    let posicion2 : number = parseInt(input2.value);
    for (let i : number = posicion1; i <= posicion2; i++) {
        inHTML += "<p>" + paises[i] + "</p>";
    }
    div.innerHTML = inHTML;
}