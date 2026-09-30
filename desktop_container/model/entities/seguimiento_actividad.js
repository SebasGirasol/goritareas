class SeguimientoActividad {

    static nombre = "seguimiento actividad";

    constructor(data) {
        this.id = data.id;
        this.fecha_actividad = data.fecha_actividad;
        this.#completa = data.completa;
        this.hora_inicio = data.hora_inicio;
        this.hora_fin = data.hora_fin;
        this.id_rutina = data.id_rutina;
        this.id_actividad = data.id_actividad;
    }

    alternanCompletar() {
        this.completa = !this.completa;
        return this.completa;
    }

    getCompleta() {
        return this.#completa;
    }
}