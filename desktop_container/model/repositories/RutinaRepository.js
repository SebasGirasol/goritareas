import { Rutina } from "../entities/rutina.js";
import Repository from "./Repository.js";

export default class RutinaRepository extends Repository {

    constructor(db) {
        super("tabla_rutina")
        this.db = db;
    }

    crear(rutina) {
        const sentencia = this.db.prepare(`
            INSERT INTO ${this.tabla}
                (nombre, color, activa, icono, diaria)
            VALUES
                (?, ?, ?, ?, ?)
        `);

        const resultado = sentencia.run(
            rutina.nombre,
            rutina.color,
            1,
            rutina.icono,
            rutina.getDiaria() ? 1 : 0
        );

        rutina.id = resultado.lastInsertRowid;

        return rutina;
    };

    actualizar(rutina) {
        const sentencia = this.db.prepare(`
            UPDATE ${this.tabla}
            SET
                nombre = ?,
                color = ?,
                activa = ?,
                icono = ?,
                diaria = ?
            WHERE id = ?
        `);

        const resultado = sentencia.run(
            rutina.nombre,
            rutina.color,
            rutina.getActiva() ? 1: 0,
            rutina.icono,
            rutina.getDiaria() ? 1: 0,
            rutina.id
        );

        return resultado.changes > 0;
    };

}