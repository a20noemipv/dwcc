window.addEventListener("load", load);
// Código de validaciones del formulario
function load() {
    document.getElementById("formulario").addEventListener("submit", enviar);
}

function validar() {
    let nombre = document.getElementById("nombre").value;
    let nombreValidado = validarNombre(nombre);

    let apellidos = document.getElementById("apellidos").value;
    let apellidosValidados = validarApellidos(apellidos);

    let email = document.getElementById("correo").value;
    let emailValidado = validarEmail(email);

    let username = document.getElementById("usuario").value;
    let usernameValidado = validarUsuario(username);

    let pssw = document.getElementById("clave").value;
    let passwordValidada = validarPassword(pssw);

    let tlf = document.getElementById("telefono").value;
    let tlfValidado = validarTlf(tlf);

    let confirmacion = true;
    if (!nombreValidado || !apellidosValidados || !emailValidado || !usernameValidado || !passwordValidada || !tlfValidado) {
        confirmacion = false;
    }
    return confirmacion;
}

function validarNombre(nombre) {
    let patronNombre = /^([a-zA-Z\s]){1,20}$/;
    return nombre.match(patronNombre);
}

function validarApellidos(apellidos) {
    let patronApellidos = /^([a-zA-Z\s]){1,40}$/;
    return apellidos.match(patronApellidos);
}

function validarEmail(email) {
    let patronEmail = /^([\w]+)(@)([\w]+)(\.)((com)|(net)|(gal)|(org))$/;
    return email.match(patronEmail);
}

function validarUsuario(username) {
    let patronUsername = /^(\w){1,20}$/;
    return username.match(patronUsername);
}

function validarPassword(pssw) {
    let patronMayus = /[A-Z]+/;
    let patronMin = /[a-z]+/;
    let patronNUm = /[0-9]+/;
    let patronEsp = /[\W]+/;
    if(pssw.length<8){
        return false;
    }
    if(!pssw.match(patronMayus)){
        return false;
    }
    if(!pssw.match(patronMin)){
        return false;
    }
    if(!pssw.match(patronNUm)){
        return false;
    }
    if(!pssw.match(patronEsp)){
        return false;
    }
    return true;
}

function validarTlf(tlf) {
    let patronTlf = /^\d{9}$/;
    return tlf.match(patronTlf);
}


// Envio de datos con XMLHttpRequest
let peticion;
function enviar() {
    event.preventDefault();

    let validacion = validar();
    if (validacion) {
        let nombre = document.getElementById("nombre").value;
        let apellidos = document.getElementById("apellidos").value;
        let email = document.getElementById("correo").value;
        let username = document.getElementById("usuario").value;
        let pssw = document.getElementById("clave").value;
        let tlf = document.getElementById("telefono").value;

        peticion = new XMLHttpRequest();
        peticion.open("POST", "http://localhost:80/tarea7/registrar.php");
        peticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        peticion.send(`nombre=${nombre}&apellidos=${apellidos}&correo=${email}&usuario=${username}&clave=${pssw}&telefono=${tlf}`);
        peticion.addEventListener("load", cargada);
    }else {
        alert("LOS DATOS DEL FORMULARIO NO SON VÁLIDOS");
    }
}

function cargada() {
    document.getElementById("info-respuesta").attributes["style"].nodeValue="";
    document.getElementById("respuesta-servidor").innerHTML = peticion.responseText;
}