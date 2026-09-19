export class Rutina {
    #activa;
    #diaria;

    constructor(id, nombre, color, activa, icono, diaria) {
        this.id = id;
        this.nombre = nombre;
        this.color = color;
        this.#activa = activa;
        this.icono = icono;
        this.#diaria = diaria;
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
}