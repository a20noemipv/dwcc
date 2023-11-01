var edad = Number(window.prompt("Introduce tu edad"));
switch (true) {
    case (edad >= 0 && edad <= 12):
        alert("Estás en el rango de niño");
        break;
    case (edad >= 13 && edad <= 18):
        alert("Estás en el rango de adolescente");
        break;
    case (edad >= 19 && edad <= 30):
        alert("Estás en el rango de jóven");
        break;
    case (edad >= 31 && edad <= 64):
        alert("Estás en el rango de adulto");
        break;
    case (edad >= 65 && edad <= 100):
        alert("Estás en el rango de jubilado");
        break;
    case (edad < 0 || edad > 100):
        alert("Introduce una edad válida");
        break;
    default:
        alert("Introduce un número");
}
