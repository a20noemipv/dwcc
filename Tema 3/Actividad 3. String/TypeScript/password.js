/*Ejercicio 2.- Pide ahora una contraseña y comprobaremos que cumple con los siguientes requisitos:
    - Entre 8 y 16 caracteres.
    - Alguna mayúscula
    - Alguna minúscula
    - Algún número
    - Algún caracter especial*/
var pssw = prompt("Introduce una contraseña");
var caractEspacial = false;
var mayus = false;
var minus = false;
var num = false;
if (pssw !== null) {
    if (pssw.length >= 8 && pssw.length <= 16) {
        console.log(pssw);
    }
    else {
        alert("La contraseña debe tener entre 8 y 16 caracteres");
    }
    for (var i = 0; i < pssw.length; i++) {
        if (pssw.charAt(i) == pssw.charAt(i).toUpperCase()) {
            mayus = true;
        }
        if (pssw.charAt(i) == pssw.charAt(i).toLowerCase()) {
            minus = true;
        }
        if (!isNaN(parseInt(pssw.charAt(i)))) {
            num = true;
        }
        //códigos ASCII:
        //numeros 0-9: 48 - 57
        //letras mayus [A-Z]: 65 - 90 
        //letras minus [a-z]: 97 - 122
        var charCode = pssw.charCodeAt(i);
        if ((charCode < 48 || charCode > 57) && (charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122)) {
            caractEspacial = true;
        }
    }
    if (mayus && minus && num && caractEspacial) {
        alert("La contraseña es correcta");
    }
    else if (!mayus) {
        alert("La contraseña debe tener al menos una mayúscula");
    }
    else if (!minus) {
        alert("La contraseña debe tener al menos una minúscula");
    }
    else if (!num) {
        alert("La contraseña debe tener al menos un número");
    }
    else if (!caractEspacial) {
        alert("La contraseña debe tener al menos un caracter especial");
    }
}
