import Repository from "./Repository.js";

export default class SeguimientoActividadRepository extends Repository {
    
    constructor(db) {
        super("seguimiento_actividad_dia");
        this.db = db;
    }

    crear(seguimiento) {
        const sentencia = this.db.prepare(`
            INSERT INTO ${this.tabla}
                (fecha_actividad, completa, hora_inicio, hora_fin, id_rutina, id_actividad)
            VALUES
                (?, ?, ?, ?, ?, ?)
        `)

        const resultado = sentencia.run(
            seguimiento.fecha_actividad,
            0,
            seguimiento.hora_inicio,
            seguimiento.hora_fin,
            seguimiento.id_rutina,
            seguimiento.id_actividad
        )

        seguimiento.id = resultado.lastInsertRowid;

        return seguimiento;
    }

    actualizar(seguimiento) {
        const sentencia = this.db.prepare(`
            UPDATE ${this.tabla}
            SET
                fecha_actividad = ?,
                completa = ?,
                hora_inicio = ?,
                hora_fin = ?,
                id_rutina = ?,
                id_actividad = ?
            WHERE id = ?
        `);

        const resultado = sentencia.run(
            seguimiento.fecha_actividad,
            seguimiento.getCompleta() ? 1: 0,
            seguimiento.hora_inicio,
            seguimiento.hora_fin,
            seguimiento.id_rutina,
            seguimiento.id_actividad,
            seguimiento.id
        );

        return resultado.changes > 0;
    }
}