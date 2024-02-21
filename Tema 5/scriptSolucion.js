
function enviarForm() {
    // let confirmacion = confirm('¿Deseas enviar el formulario?');
    // if(!confirmacion) {
    //     event.preventDefault();
    // }
    event.preventDefault();
    let nombre = document.getElementById("nombre");
    let apellidos = document.getElementById("apellidos");
    let edad = parseInt(document.getElementById("edad"));
    let nif = document.getElementById("nif").value;

    validarNif(nif);
}

function validarEdad(edad) {
    
}

function validarNif(nif) {
    let patronNif = /^\d{8}-[a-zA-Z]$/;
    if(!nif.match(patronNif)){
        alert("NIF INCORRECTO");
    }
}


