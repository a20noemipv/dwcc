//Ejercicio 1.- Pìde al usuario su Nombre y apellidos en una única petición y muestra:
// - El tamaño del Nombre y los apellidos: 
let str = prompt("Introduce tu nombre tus apellidos");
if (str != null) {
    console.log(str.length);
    // - El tamaño del Nombre y los apellidos sin espacios:
    let espacios = str.replace(" ", "");
    console.log(espacios.length);
    // - El Nombre y los apellidos en minúsuculas:
    console.log(str.toLowerCase());
    // - "E" en mayúsuclas:
    console.log(str.replaceAll("e", "E"));
    // - Que enseñe separado Nombre, Apellido1 y Apellido2.
    console.log("Nombre: " + str.slice(0, 5));
    console.log("Primer Apellido: " + str.slice(6, 11));
    console.log("Segundo Apellido: " + str.slice(12, 20));
    // - Una propuesta de Nombre de usuario con el Nombre en minúsculas, la inicial del primer apellido y del segundo en mayúsculas:
    let nombre = str.slice(0, 5);
    let min = nombre.toLowerCase();
    let letra1 = str.charAt(6);
    let letra2 = str.charAt(12);
    console.log(min + letra1.toUpperCase() + letra2.toUpperCase());
}
