export default class ActividadRutinaRepository {
    constructor(db) {
        this.tabla = "actividad_rutina";
        this.db = db;
    }

    obtenerTodas() {
        const sentencia = this.db.prepare(`
            SELECT * FROM ${this.tabla}
        `);

        return sentencia.all();
    }

    tieneActividadesRelacionadas(id) {
        const sentencia = this.db.prepare(`
            SELECT EXISTS (
                SELECT 1
                FROM ${this.tabla}
                WHERE id_rutina = ?
            ) AS tiene_actividad
        `);

        const resultado = sentencia.get(id);

        return resultado.tiene_actividad === 1;
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