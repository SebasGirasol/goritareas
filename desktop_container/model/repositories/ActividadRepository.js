import Repository from "./Repository.js";

export default class ActividadRepository extends Repository {

    constructor(db) {
        super("tabla_actividad")
        this.db = db;
    }

    crear(actividad) {
        const sentencia = this.db.prepare(`
            INSERT INTO ${this.tabla}
                (nombre, icono, activa)
            VALUES
                (?, ?, ?)
        `);

        const resultado = sentencia.run(
            actividad.nombre,
            actividad.icono,
            1
        );

        actividad.id = resultado.lastInsertRowid;

        return actividad;
    };

    actualizar(actividad) {
        const sentencia = this.db.prepare(`
            UPDATE ${this.tabla}
            SET
                nombre = ?,
                icono = ?,
                activa = ?
            WHERE id = ?
        `);

        sentencia.run(
            actividad.nombre,
            actividad.icono,
            actividad.activa ? 1: 0,
            actividad.id
        );

        return true;
    };

}