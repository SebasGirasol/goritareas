class Actividad {

    static nombre = "actividad";

    constructor(data) {
        this.id = data.id;
        this.nombre = data.nombre;
        this.icono = data.icono;
        this.#activa = data.activa;
    }

    alternarActivo() {
        this.#activa = !this.#activa;
    }

    getActiva() {
        return this.#activa
    }

    obtenerNombreEntidad() {
        return "actividad"
    }
}