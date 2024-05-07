window.addEventListener("load", load);

let celdaClicada = false;

function load () {
    let div = document.getElementById("zonadibujo");
    let paleta = document.getElementById("paleta");
    let nodosPaleta = paleta.getElementsByTagName('tr');
    console.log(nodosPaleta);
    let filaColores = nodosPaleta[0];
    let celdasColores = filaColores.getElementsByTagName('td');
    for (let i = 0; i < celdasColores.length; i++){
        let celdaColor = celdasColores[i];
        //celdaColor.classList.remove('seleccionado');
        celdaColor.addEventListener('click', seleccionarColor);
    }

    let tabla = document.createElement("table");
    tabla.classList.add('tablerodibujo');
    // tabla.classList.remove('nombreClase');
    let caption = document.createElement("caption");
    let txtCaption = document.createTextNode("Haga CLICK en cualquier celda para activar/desactivar el Pincel");
    caption.appendChild(txtCaption);
    tabla.appendChild(caption);


    for(let fila = 0; fila < 30; fila++){
        let tr = document.createElement("tr");
        for (let col = 0; col < 30; col++){
            let td = document.createElement("td");
            td.addEventListener("click", clickCeldaTablero);
            td.addEventListener('mouseover', mouseOverCeldaTablero);

            tr.appendChild(td);
        }

        tabla.appendChild(tr);
    }

    div.appendChild(tabla);
}

function seleccionarColor (event) {
    let colorSeleccionado = event.target;
    let paleta = document.getElementById("paleta");
    let nodosPaleta = paleta.getElementsByTagName('tr');
    //console.log(nodosPaleta);
    let filaColores = nodosPaleta[0];
    let celdasColores = filaColores.getElementsByTagName('td');
    for (let i = 0; i < celdasColores.length; i++){
        let celdaColor = celdasColores[i];
        celdaColor.classList.remove('seleccionado');
    }

    colorSeleccionado.classList.add('seleccionado');
}

function clickCeldaTablero (event) {
    let celdaSeleccionada = event.target;
    let pincel = document.getElementById("pincel");
    let txtTd = pincel.childNodes[0];
    //console.log(celdaSeleccionada);
    pintarCelda(celdaSeleccionada);
    if(celdaClicada) {
        celdaClicada = false;
        let newTxtTd = document.createTextNode("PINCEL DESACTIVADO");
        pincel.replaceChild(newTxtTd, txtTd);
    }else {
        celdaClicada = true;
        let newTxtTd = document.createTextNode("PINCEL ACTIVADO");
        pincel.replaceChild(newTxtTd, txtTd);
    }
}

function mouseOverCeldaTablero (event){
    if(celdaClicada) {
        let celdaSeleccionada = event.target;
        pintarCelda(celdaSeleccionada);
    }
}

function pintarCelda (celdaSeleccionada) {
    let paleta = document.getElementById("paleta");
    let nodosPaleta = paleta.getElementsByTagName("tr");
    let filaColores = nodosPaleta[0]; 
    let celdasColores = filaColores.getElementsByTagName("td");
    for (let i = 0; i < celdasColores.length; i++){
        let celdaColor = celdasColores[i];
        if(celdaColor.classList.contains('seleccionado')){
            if(celdaSeleccionada.classList.length > 0){
                celdaSeleccionada.classList.remove(celdaSeleccionada.classList[0]);
            }
            if(celdaColor.classList.contains('color1')){
                celdaSeleccionada.classList.add('color1');
            }if (celdaColor.classList.contains('color2')) {
                celdaSeleccionada.classList.add('color2');
            }if (celdaColor.classList.contains('color3')) {
                celdaSeleccionada.classList.add('color3');
            }if (celdaColor.classList.contains('color4')) {
                celdaSeleccionada.classList.add('color4');
            }if (celdaColor.classList.contains('color5')) {
                celdaSeleccionada.classList.add('color5');
            }if (celdaColor.classList.contains('color6')) {
                celdaSeleccionada.classList.add('color6');
            }
        }
    }
}