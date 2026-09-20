class Actividad {
    constructor(id, nombre, icono, activa, id_rutina) {
        this.id = id;
        this.nombre = nombre;
        this.icono = icono;
        this.#activa = activa;
    }

    alternarActivo() {
        this.#activa = !this.#activa;
    }

    getActiva() {
        return this.#activa
    }
}