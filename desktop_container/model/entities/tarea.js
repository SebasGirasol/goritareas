class Tarea {
    constructor(id, nombre, completa, fecha) {
        this.id = id;
        this.nombre = nombre;
        this.#completa = completa;
        this.fecha = fecha;
    }

    alternanCompletar() {
        this.completa = !this.completa;
        return this.completa;
    }
    
    getCompleta() {
        return this.#completa;
    }
}