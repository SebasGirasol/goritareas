export default class Repository {

    constructor(tabla) {
        this.tabla = tabla;
    };

    obtenerTodas() {
        const sentencia = this.db.prepare(`
            SELECT * FROM ${this.tabla}
        `);

        return sentencia.all();
    }

    buscarPorID(id) {
        const sentencia = this.db.prepare(`
            SELECT * FROM ${this.tabla}
            WHERE id = ?
        `);

        const registro = sentencia.get(id);

        if (!registro) {
            return null;
        }

        return registro;
    }

    validarExiste(id) {
        const sentencia = this.db.prepare(`
            SELECT EXISTS(
                SELECT 1 FROM
                    ${this.tabla}
                WHERE id = ?
            ) AS existe
        `);
        
        const resultado = sentencia.get(id);

        return resultado.existe === 1;
    };

    eliminar(id) {
        const sentencia = this.db.prepare(`
            DELETE FROM ${this.tabla}
            WHERE id = ?
        `);

        sentencia.run(
            id
        );

        return true;
    };
}