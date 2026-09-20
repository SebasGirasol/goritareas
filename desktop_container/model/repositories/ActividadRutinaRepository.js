export default class ActividadRutinaRepository {
    constructor(db) {
        super("actividad_rutina")
        this.db = db;
    }

    obtenerTodas() {
        const sentencia = this.db.prepare(`
            SELECT * FROM ${this.tabla}
        `);

        return sentencia.all();
    }

    asignar (id_rutina, id_actividad) {
        const sentencia = this.db.prepare(`
            INSERT INTO ${this.tabla}
                (id_rutina, id_actividad)
            VALUES
                (?, ?)
        `);

        sentencia.run(
            id_rutina,
            id_actividad
        );

        return true
    }

    desasignar (id_rutina, id_actividad) {
        const sentencia = this.db.prepare(`
            DELETE FROM ${this.tabla}
            WHERE id_rutina = ? AND id_actividad = ?
        `)

        sentencia.run(
            id_rutina,
            id_actividad
        )

        return true
    }
}