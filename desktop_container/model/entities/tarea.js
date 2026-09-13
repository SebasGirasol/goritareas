class tarea {
    constructor(id, nombre, completa, fecha) {
        this.id = id;
        this.nombre = nombre;
        this.#completa = completa;
        this.fecha = fecha;
    }

    completar() {
        if (this.#completa) {
            throw new Error("La tarea ya se completo");
        }
        this.#completa = true;
    }

    getCompleta () {
        return this.#completa;
    }
}