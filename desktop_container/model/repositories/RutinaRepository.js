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
            rutina.diaria ? 1 : 0
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

        sentencia.run(
            rutina.nombre,
            rutina.color,
            rutina.activa ? 1: 0,
            rutina.icono,
            rutina.diaria ? 1: 0,
            rutina.id
        );

        return true;
    };

    //Prueba
    agregarActividadRutina(id_rutina, id_actividad) {

        const sentencia = this.db.prepare(`
            INSERT INTO actividad_rutina
                (id_rutina, id_actividad)
            VALUES
                (?, ?)
        `);

        const resultado = sentencia.run(
            id_rutina,
            id_actividad
        );

        return true;
    };

    //prueba
    #crearEntidad(rutinaBD) {
        const rutina = new Rutina(
            rutinaBD.id,
            rutinaBD.nombre,
            rutinaBD.color,
            !!rutinaBD.activa,
            rutinaBD.icono,
            !!rutinaBD.diaria
        );

        return rutina;
    };
}