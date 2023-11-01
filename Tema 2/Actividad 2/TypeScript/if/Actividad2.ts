let edad : number = Number(window.prompt("Introduce tu edad"));
if (edad < 0 || edad > 100) {
    alert("Introduce una edad válida");
}else if (edad >= 0 && edad <= 12) {
    alert("Estás en el rango de niño");
}else if (edad >= 13 && edad <= 18) {
    alert("Estás en el rango de adolescente");
}else if (edad >= 19 && edad <= 30){
    alert("Estás en el rango de jóven");
}else if (edad >= 31 && edad <= 64) {
    alert("Estás en el rango de adulto");
}else if (edad >= 65 && edad <= 100) {
    alert("Estás en el rango de jubilado");
}else {
    alert("Introduce una edad");
}