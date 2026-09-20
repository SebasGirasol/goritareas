import { Rutina } from "../entities/rutina.js";

export default class RutinaRepository {

    constructor(db) {
        this.db = db;
    }

    crear(rutina) {
        const sentencia = this.db.prepare(`
            INSERT INTO tabla_rutina
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

    obtenerTodas() {
        const sentencia = this.db.prepare(`
            SELECT * FROM tabla_rutina
        `);

        return sentencia.all()
    };

    buscarPorID(id) {
        const sentencia = this.db.prepare(`
            SELECT * FROM tabla_rutina
            WHERE id = ?
        `);

        const rutina = sentencia.get(id);

        if (!rutina) {
            return null;
        }

        return rutina
    };

    actualizar(rutina) {
        const sentencia = this.db.prepare(`
            UPDATE tabla_rutina
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

    eliminar(id) {
        const sentencia = this.db.prepare(`
            DELETE FROM tabla_rutina
            WHERE id = ?
        `);

        sentencia.run(
            id
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

    validarExiste(id) {
        const sentencia = this.db.prepare(`
            SELECT EXISTS(
                SELECT 1 FROM
                    tabla_rutina
                WHERE id = ?
            ) AS existe
        `);
        
        const resultado = sentencia.get(id);

        return resultado.existe === 1;
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