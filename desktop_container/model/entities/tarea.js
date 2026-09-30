class Tarea {

    static nombre = "tarea";

    constructor(data) {
        this.id = data.id;
        this.nombre = data.nombre;
        this.#completa = data.completa;
        this.fecha = data.fecha;
    }

    alternanCompletar() {
        this.completa = !this.completa;
        return this.completa;
    }
    
    getCompleta() {
        return this.#completa;
    }

}