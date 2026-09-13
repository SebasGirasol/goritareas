class actividad{
    constructor(id, nombre, icono, activa, id_rutina) {
        this.id = id;
        this.nombre = nombre;
        this.icono = icono;
        this.#activa = activa;
        this.id_rutina = id_rutina;
    }

    alternarActivo() {
        this.#activa = !this.#activa;
    }

    getActiva() {
        return this.#activa
    }
}