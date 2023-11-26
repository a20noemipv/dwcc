//Ejercicio 1.- Enseñar el número de días que quedan desde hoy (16/11/2023) hasta final de curso (25/06/2024)
function finCurso () {
    let hoy : Date = new Date();
    let futuro : Date = new Date("2024-06-25");
    let milisegundos : number = futuro.getTime() - hoy.getTime();
    let segundos : number = milisegundos/1000;
    let minutos : number = segundos/60;
    let horas : number = minutos/60;
    let dias : number = horas/24;
    console.log(dias);
}
finCurso();

/*Ejercicio 2.- Pedir la fecha de tu cumpleaños (no hace falta el año) y saque todos los años en el que tu cumpleaños va a caer
en fin de semana desde este año (2023) hasta el año 2100.*/

function cumpleaños () {
    let actual : Date = new Date();
    let elemento : any = document.getElementById("cumpleaños");
    let cumpleaños : Date = new Date(elemento.value);
    for (let i = actual.getFullYear(); i <= 2100; i++) {
        let fecha : Date = new Date(i, cumpleaños.getMonth(), cumpleaños.getDay());
        if(fecha.getDay() === 0 || fecha.getDay() === 6){
            console.log(fecha.getFullYear());
        }
    }
}

//Ejercicio 3.- Enseña la fecha actual en diferentes formatos según el valor que meta el usuario por parámetro (usa un switch)
let fecha : Date = new Date("2016-02-17");
const opciones : any = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

function formatoCorto () {
    console.log(fecha.toLocaleDateString());
}

function formatoEspañol() {
    console.log(fecha.toLocaleDateString("es-ES", opciones));
}

function formatoIngles() {
    console.log(fecha.toLocaleDateString("en-US", opciones));
}

function formatoFecha (formatoFecha) {
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
let hora : Date = new Date();
function formatoHora (formatoHora) {
    switch (formatoHora) {
        case 1:
            console.log(hora.toLocaleTimeString("es-ES"));
            break;

        case 2:
            console.log(hora.toLocaleTimeString("en-US", {hour: "2-digit", minute: "2-digit"}));
            break;
    }
}