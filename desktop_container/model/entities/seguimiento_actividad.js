class SeguimientoActividad {
    constructor(id, fecha_actividad, completa, hora_inicio, hora_fin, id_rutina, id_actividad) {
        this.id = id;
        this.fecha_actividad = fecha_actividad;
        this.#completa = completa;
        this.hora_inicio = hora_inicio;
        this.hora_fin = hora_fin;
        this.id_rutina= id_rutina;
        this.id_actividad = id_actividad;
    }

    alternanCompletar() {
        this.completa = !this.completa;
        return this.completa;
    }

    getCompleta() {
        return this.#completa;
    }
}