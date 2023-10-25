var primo = true;
var numero = Number(window.prompt("Introduce un número"));
if (numero >= 1) {
    var i = 2;
    do {
        if (numero % i == 0) {
            alert(numero + "No es un número primo");
            primo = false;
            break;
        }
        i++;
    } while (i < numero);
    if (primo) {
        alert(numero + "Es un número primo");
    }
}
