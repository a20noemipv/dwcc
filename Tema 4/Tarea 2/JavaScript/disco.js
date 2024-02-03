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
        return  "<hr>" + "nombre disco: " + this.nombre + "</br>" + 
                "grupo musical o cantante: " + this.cantante + "</br>" +
                "año publicación: " + this.publicacion + "</br>" +
                "tipo de música: " + this.musica + "</br>" +
                "estado prestado: " + this.estado + "<hr>";
    }
}
