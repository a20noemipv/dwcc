class Disco {
    nombre;
    cantante;
    publicacion;
    musica;
    estado;

    constructor(){
        
    }

    cargarDatos(nombre, cantante, publicacion, musica, estado) {
        this.nombre = nombre;
        this.cantante = cantante;
        this.publicacion = publicacion;
        this.musica = musica;
        this.estado = estado;
    }

    mostrarInfo() {
        return  "<hr>" + "Nombre disco: " + this.nombre + "</br>" + 
                "Grupo Musical o Cantante: " + this.cantante + "</br>" +
                "Año publicación: " + this.publicacion + "</br>" +
                "Tipo de música: " + this.musica + "</br>" +
                "Estado prestado: " + this.estado + "<hr>";
    }
}
