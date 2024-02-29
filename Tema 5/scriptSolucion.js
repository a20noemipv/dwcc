
function enviarForm() {
    // let confirmacion = confirm('¿Deseas enviar el formulario?');
    // if(!confirmacion) {
    //     event.preventDefault();
    // }
    event.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let edad = document.getElementById("edad").value;
    let nif = document.getElementById("nif").value;
    let email = document.getElementById("email").value;
    let provincia = document.getElementById("provincia").value;
    let fecha = document.getElementById("fecha").value;
    let tlf = document.getElementById("telefono").value;
    let hora = document.getElementById("hora").value;
    let divErrores = document.getElementById("errores");
    let divIntentos = document.getElementById("intentos");

    divErrores.innerHTML = "";
    //divIntentos.innerHTML = "";
    
    let nombreValido = validarNombre(nombre);
    if(!nombreValido){
        let resultado = "El nombre no es válido <br>";
        divErrores.innerHTML += resultado;
        document.getElementById("nombre").focus();
    }
    let apellidosValido = validarApellidos(apellidos);
    if(!apellidosValido){
        let resultado = "Los apellidos no son válidos <br>";
        divErrores.innerHTML += resultado;
        document.getElementById("apellidos").focus();
    }
    let edadValido = validarEdad(edad);
    if(!edadValido){
        let resultado = "La edad no es correcta <br>";
        divErrores.innerHTML += resultado;
        document.getElementById("edad").focus();
    }
    let nifValido = validarNif(nif);
    if(!nifValido){
        let resultado = "El nif no es correcto <br>";
        divErrores.innerHTML += resultado;
        document.getElementById("nif").focus();
    }
    let emailValido = validarEmail(email);
    if(!emailValido){
        let resultado = "El email no es correcto <br>";
        divErrores.innerHTML += resultado;
        document.getElementById("email").focus();
    }
    let provinciaValido = validarProvincia(provincia);
    if(!provinciaValido){
        let resultado = "No hay seleccionada ninguna provincia <br>";
        divErrores.innerHTML += resultado;
        document.getElementById("provincia").focus();
    }
    let fechaValida = validarFecha(fecha);
    if(!fechaValida){
        let resultado = "El formato de fecha no es correcto <br>";
        divErrores.innerHTML += resultado;
        document.getElementById("fecha").focus();
    }
    let tlfValido = validarTelefono(tlf);
    if(!tlfValido){
        let resultado = "El teléfono no es correcto <br>";
        divErrores.innerHTML += resultado;
        document.getElementById("telefono").focus();
    }
    let horaValida = validarHora(hora);
    if(!horaValida){
        let resultado = "El formato de hora no es correcto";
        divErrores.innerHTML += resultado;
        document.getElementById("hora").focus();
    }
}

function validarNombre(nombre){
    return nombre;
}

function nombreMayus(){
    let nombre = document.getElementById("nombre").value;
    nombre = nombre.toUpperCase();
    document.getElementById("nombre").value = nombre;
}

function validarApellidos(apellidos){
    return apellidos;
}

function apellidosMayus(){
    let apellidos = document.getElementById("apellidos").value;
    apellidos = apellidos.toUpperCase();
    document.getElementById("apellidos").value = apellidos;
}

function validarEdad(edad) {
    let patronEdad = /(^10[0-5]$)|(^[1-9][0-9]$)|(^[0-9]$)/;
    return edad.match(patronEdad);
}

function validarNif(nif) {
    let patronNif = /^\d{8}-[a-zA-Z]$/; 
    /*La primera parte de la expresión regular está formada por cualquier dígito del 0 al 9, repetida 8 veces, tiene que tener un
    guión obligatoriamente, y la última parte está creada porque cualquier letra de a la "a" a la "z" tanto minúsculas como mayúsculas.*/
    return nif.match(patronNif);
}

function validarEmail(email){
    let patronEmail = /^([\w\.]+)(@)([a-zA-Z]+)(\.)([a-zA-Z]+)$/;
    /*La primera parte incluye cualquier caracter, desde dígitos a letras, añadiendo también los puntos coincidiendo 1 o más veces,
    deberá tener un @ obligatoriamente, la siguiente parte deberá estar formado sólo por letras tanto mayúsculas como minúsculas
    repitiéndose 1 o más veces, contendrá un "." obligatoriamente, y la última parte estará formada también sólo por letras, tanto 
    mayúsculas como minúsculas, de una a más veces repetidas.*/
    return email.match(patronEmail);
}

function validarProvincia(provincia){
    return provincia != "0";
}

function validarFecha(fecha) {
    let patronFecha = /(^(\d{2})([\-])(\d{2})([\-])(\d{4})$)|(^(\d{2})([\/])(\d{2})([\/])(\d{4})$)/;
    /*En esta expresión regular deberemos controlar la fecha de dos maneras distintas. Las dos lo forman dos grupos de dígitos que
    se repiten dos veces, y un grupo de dígitos que se repiten 4 veces. la diferencia entre ellos es que el primero controla el 
    formato con guiones y el otro el formato con barras.*/
    return fecha.match(patronFecha);
}

function validarTelefono(tlf){
    let patronTlf = /^\d{9}$/;
    /*El patrón está formado por grupo de cualquier dígito que se repite 9 veces obligatoriamente. Nos puede haber un teléfono con
    8 dígitos o menos.*/
    return tlf.match(patronTlf);
}

function validarHora(hora){
    let patronHora = /^(\d{2})(:)(\d{2})$/;
    /*El patrón está formado por dos partes de cualquier dígito que se repiten 2 veces, y en medio el caracter ":" obligatorio.*/
    return hora.match(patronHora);
}

