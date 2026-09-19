class SeguimientoActividad {
    constructor(id, fecha_actividad, completa, hora_inicio, hora_fin, id_actividad) {
        this.id = id;
        this.fecha_actividad = fecha_actividad;
        this.#completa = completa;
        this.hora_inicio = hora_inicio;
        this.hora_fin = hora_fin;
        this.id_actividad = id_actividad;
    }

    completar() {
        if (this.#completa) {
            throw new Error("La actividad ya se completo");
        }
        this.#completa = true;
    }

    getCompleta() {
        return this.#completa;
    }
}