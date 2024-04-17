window.addEventListener("load", load);

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
        celdaColor.addEventListener('click', seleccionarCelda);
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
        tr.appendChild(td);
    }
    tabla.appendChild(tr);
}

div.appendChild(tabla);
}

function seleccionarCelda (event) {
    let colorSeleccionado = event.target;
    let paleta = document.getElementById("paleta");
    let nodosPaleta = paleta.getElementsByTagName('tr');
    console.log(nodosPaleta);
    let filaColores = nodosPaleta[0];
    let celdasColores = filaColores.getElementsByTagName('td');
    for (let i = 0; i < celdasColores.length; i++){
        let celdaColor = celdasColores[i];
        celdaColor.classList.remove('seleccionado');
    }

    colorSeleccionado.classList.add('seleccionado');
}