//Ejercicio 1.- Enseñar el número de días que quedan desde hoy (16/11/2023) hasta final de curso (25/06/2024)
function finCurso() {
    var hoy = new Date();
    var futuro = new Date("2024-06-25");
    var milisegundos = futuro.getTime() - hoy.getTime();
    var segundos = milisegundos / 1000;
    var minutos = segundos / 60;
    var horas = minutos / 60;
    var dias = horas / 24;
    console.log(dias);
}
finCurso();
/*Ejercicio 2.- Pedir la fecha de tu cumpleaños (no hace falta el año) y saque todos los años en el que tu cumpleaños va a caer
en fin de semana desde este año (2023) hasta el año 2100.*/
function cumpleaños() {
    var actual = new Date();
    var elemento = document.getElementById("cumpleaños");
    var cumpleaños = new Date(elemento.value);
    for (var i = actual.getFullYear(); i <= 2100; i++) {
        var fecha_1 = new Date(i, cumpleaños.getMonth(), cumpleaños.getDay());
        if (fecha_1.getDay() === 0 || fecha_1.getDay() === 6) {
            console.log(fecha_1.getFullYear());
        }
    }
}
//Ejercicio 3.- Enseña la fecha actual en diferentes formatos según el valor que meta el usuario por parámetro (usa un switch)
var fecha = new Date("2016-02-17");
var opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
function formatoCorto() {
    console.log(fecha.toLocaleDateString());
}
function formatoEspañol() {
    console.log(fecha.toLocaleDateString("es-ES", opciones));
}
function formatoIngles() {
    console.log(fecha.toLocaleDateString("en-US", opciones));
}
function formatoFecha(formatoFecha) {
    switch (formatoFecha) {
        case "corto":
            formatoCorto();
            break;
        case "esp":
            formatoEspañol();
            break;
        case "eng":
            formatoIngles();
            break;
    }
}
//Ejercicio 4.- Enseña la hora actual en diferentes formatos según el valor que meta el usuario por parámetro (usa un switch)
var hora = new Date();
function formatoHora(formatoHora) {
    switch (formatoHora) {
        case 1:
            console.log(hora.toLocaleTimeString("es-ES"));
            break;
        case 2:
            console.log(hora.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }));
            break;
    }
}
