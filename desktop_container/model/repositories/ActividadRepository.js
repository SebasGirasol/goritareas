export default class ActividadRepository {

    constructor(db) {
        this.db = db;
    }

    crear(actividad) {
        const sentencia = this.db.prepare(`
            INSERT INTO tabla_actividad
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

    obtenerTodas() {
        const sentencia = this.db.prepare(`
            SELECT * FROM tabla_actividad
        `);

        return sentencia.all()
    };

    buscarPorID(id) {
        const sentencia = this.db.prepare(`
            SELECT * FROM tabla_actividad
            WHERE id = ?
        `);

        const actividad = sentencia.get(id);

        if (!actividad) {
            return null;
        }

        return actividad
    };
    
}