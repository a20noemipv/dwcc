window.addEventListener("load", load);
// Código de validaciones del formulario
function load() {
    document.getElementById("formulario").addEventListener("submit", enviar);
}

//Controlamos todas las validaciones de los datos para enviar el formulario
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


//PATRONES PARA VALIDACIÓN INDIVIDUAL DE LOS DATOS DEL FORMULARIO
function validarNombre(nombre) {
    //Patrón alfabético, permitiendo espacios, con longitud máxima de 20 caracteres.
    let patronNombre = /^([a-zA-Z\s]){1,20}$/;
    return nombre.match(patronNombre);
}

function validarApellidos(apellidos) {
    //Patrón alfabético, permitiendo espacios, con longitud máxima de 40 caracteres.
    let patronApellidos = /^([a-zA-Z\s]){1,40}$/;
    return apellidos.match(patronApellidos);
}

function validarEmail(email) {
    /*Este patrón se divide en varias partes
    Primera: Cualquier caracter alfanumérico, incluyendosubrayados, repitiéndose 1 o más veces
    Segunda: Debe contener el caracter especial @
    Tercera: Igual que la primera, cualquier caracter alfanumérico, incluyendo subrayados
    Cuarta: Debe contener un .
    Quinta: El email debe acabar en: com, net, gal u org específicamente*/
    let patronEmail = /^([\w]+)(@)([\w]+)(\.)((com)|(net)|(gal)|(org))$/;
    return email.match(patronEmail);
}

function validarUsuario(username) {
    //Patrón alfabético, permitiendo espacios, con longitud máxima de 20 caracteres.
    let patronUsername = /^(\w){1,20}$/;
    return username.match(patronUsername);
}

function validarPassword(pssw) {
    /*Para validar la contraseña, crearemos varios patrones y controlaremos que se validen cada uno de ellos.
    Los patrones son los siguientes:
    Primero La contraseña de contener al menos 1 letra mayúscula obligatoriamente.*/
    let patronMayus = /[A-Z]+/;
    //Segundo patrón: También deberá contener al menos 1 minúscula.
    let patronMin = /[a-z]+/;
    //Tercer patrón: Tendrá que tener al menos un número.
    let patronNUm = /[0-9]+/;
    //Cuarto patrón: Tendrá que tener al menos 1 caracter especial.
    let patronEsp = /[\W]+/;
    //Controlamos que su longitud no sea menor de 8 caracteres.
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
    //Patrón para el teléfono: tiene que estar formado únicamente por números, y no podrá ser ni mayor ni menor a 9 digitos de longitud
    let patronTlf = /^\d{9}$/;
    return tlf.match(patronTlf);
}


// Envio de datos con XMLHttpRequest
//Creamos la variable petición para realizar las llamadas al servidor
let peticion;
function enviar() {
    event.preventDefault();

    let validacion = validar();
    //Controlamos que sólo se envíen los datos en caso de que todos ellos estén bien validados.
    if (validacion) {
        let nombre = document.getElementById("nombre").value;
        let apellidos = document.getElementById("apellidos").value;
        let email = document.getElementById("correo").value;
        let username = document.getElementById("usuario").value;
        let pssw = document.getElementById("clave").value;
        let tlf = document.getElementById("telefono").value;

        //Creamos el objeto XMLHttpRequest
        peticion = new XMLHttpRequest();
        //Con la método "open", le pasamos el método que vamos a usar para enviar los datos (GET o POST) y la URL del servidor  
        peticion.open("POST", "http://localhost:80/tarea7/registrar.php");
        //Creamos una cabecera con el tipo de contenido que vamos a enviar
        peticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        //Con el método send, le pasamos los datos que le vamos a enviar al servidor.
        peticion.send(`nombre=${nombre}&apellidos=${apellidos}&correo=${email}&usuario=${username}&clave=${pssw}&telefono=${tlf}`);
        peticion.addEventListener("load", cargada);
    }else {
        //Ponemos un alert en caso de que los datos no sean validados para que no envíe el formulario.
        alert("LOS DATOS DEL FORMULARIO NO SON VÁLIDOS");
    }
}

//Respuesta del servidor
function cargada() {
    //Le quitamos el estilo "display:none al div, para que podamos mostrar la respuesta del servidor."
    document.getElementById("info-respuesta").attributes["style"].nodeValue="";
    //Enviamos la respuesta del servidor.
    document.getElementById("respuesta-servidor").innerHTML = peticion.responseText;
}