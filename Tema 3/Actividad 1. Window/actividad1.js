//Necesitamos que cargue toda la página para poder añadir los eventos a los botones, ya que primero carga el archivo JS antes que el botón.
window.addEventListener("load", onDocumentoCargado);

let permiso = window.confirm("¿Está seguro de que desea abrir una nueva ventana?");
let subVentana;

//Controlamos que el usuario da permiso para poder abrir la ventana emergente.
if(permiso){
    subVentana = window.open("window.html", "nueva", "height=300,width=300,left=400px,top=400px");
    let url = window.location;
    let protocolo = window.location.protocol;
    let navegador = window.navigator.userAgent;
    let java = window.navigator.javaEnabled();
    subVentana.document.write(`<h3>Exemplo de ventá nova</h3>
    <p>URL: ${url}</p>
    <p>PROTOCOLO: ${protocolo}</p>
    <p>NAVEGADOR: ${navegador}</p>
    <p>JAVA: ${java}</p>`);
    subVentana.addEventListener("blur", focus);
    window.addEventListener("click", focus);
    focus();
}

//Función creada para el evento para cerrar la ventana emergente. En ella controlamos si se le dieron los permisos previos
function cerrarVentana () {
    if(!subVentana || subVentana.closed){
        alert("Error al cerrar la página");
    }else {
        subVentana.close();
    }
}

//Función para el evento de mover la ventana emergente (usando moveBy)
function mover () {
    subVentana.moveBy(200, -100);
}

//Función para el otro eventopara mover la ventana emergente (usando MoveTo)
function moveTo(){
    subVentana.moveTo(0, 0);
}

//Función para el evento focus (le damos el foco a la ventana emergente)
function focus () {
    subVentana.focus();
}

//Función para el evento de redimensionar la ventana emergente
function redimensionar () {
    subVentana.resizeTo(500, 500);
}

//Función para el evento de aumentar el tamaño de la ventana emergente en 50px de ancho y alto
function aumentar () {
    subVentana.resizeBy(50, 50);
}

//Función con todos los eventos para que se carguen a la vez que se carga el archivo principal
function onDocumentoCargado(){
    document.getElementById("close").addEventListener("click", cerrarVentana);
    document.getElementById("mover").addEventListener("click", mover);
    document.getElementById("moveto").addEventListener("click", moveTo);
    document.getElementById("redimensionar").addEventListener("click", redimensionar);
    document.getElementById("aumentar").addEventListener("click", aumentar);
}

