import Repository from "./Repository.js";

export default class TareaRepository extends Repository{
    constructor(db) {
        super("tareas");
        this.db = db;
    }

    crear(tarea) {
        const sentencia  = (`
            INSERT INTO ${this.tabla}
                (nombre, completa, fecha)
            VALUES
                (?, ?, ?)
        `)
        
        const resultado = sentencia.run(
            tarea.nombre,
            0,
            tarea.fecha
        )

        tarea.id = resultado.lastInsertRowid;

        return tarea;
    }

    actualizar(tarea) {
        const sentencia = (`
            UPDATE ${this.tabla}
            SET
                nombre = ?,
                completa = ?,
                fecha = ?
            WHERE id = ?
        `);

        const resultado = sentencia.run(
            tarea.nombre,
            tarea.getCompleta() ? 1: 0,
            tarea.fecha,
            tarea.id
        )

        return resultado.changes > 0;
    }
}