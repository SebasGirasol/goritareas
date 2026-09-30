export class Rutina {
    
    #activa;
    #diaria;

    static nombre = "rutina";

    constructor(data) {
        this.id = data.id;
        this.nombre = data.nombre;
        this.color = data.color;
        this.#activa = data.activa;
        this.icono = data.icono;
        this.#diaria = data.diaria;
        this.id_primera_version = data.id_primera_version;
    }

    alternarActivo() {
        this.#activa = !this.#activa;
    }

    getActiva() {
        return this.#activa
    }

    alternarDiaria() {
        this.#diaria = !this.#diaria;
    }

    getDiaria() {
        return this.#diaria
    }

    obtenerNombreEntidad() {
        return "rutina"
    }
}