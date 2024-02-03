let discos = new Array();

function load () {
    let nombre = document.getElementById("name").value;
    let cantante = document.getElementById("artist").value;
    let publicacion = document.getElementById("year").value;
    let musica = document.getElementById("music").value;
    let estado = document.getElementById("prestado").checked;
    

    let disco = new Disco();
    disco.cargarDatos(nombre, cantante, publicacion, musica, estado);

    console.log(disco.mostrarInfo());

    if(disco){
        discos.push(disco);
    }
}

function mostrarDiscos() {
    let div = document.getElementById("resultado");
    let inHTML = '';
    for (let i = 0; i < discos.length; i++) {
        inHTML += "<p>" + discos[i].mostrarInfo() + "</p>";
        console.log(discos);
    }
    div.innerHTML = inHTML;
}