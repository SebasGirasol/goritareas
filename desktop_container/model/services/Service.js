import Resultado from './Resultados.js';

export default class Service {

    constructor(Entidad, repository, validaciones, conversion) {
        this.Entidad = Entidad;
        this.repository = repository;
        this.validacion = validaciones;
        this.conversion = conversion;
    }

    obtenerTodas() {
        try {
            const datos = this.repository.obtenerTodas();
            let entidades = [];

            for (let fila of datos) {
                let filaConvertida = this.conversion(fila);
                let entidad = new this.Entidad(filaConvertida);
                entidades.push(entidad);
            }

            return Resultado.ok(`${this.Entidad.nombre}s obtenidas`, entidades);

        } catch (error) {
            return Resultado.error("Ocurrio un error al obtener las rutinas: " + error);
        }
    }

    crear(data) {

        const entidad = new this.Entidad(data)

        const validacion = this.validacion(entidad);

        if (!validacion.status) {
            return validacion;
        }

        try {
            const resupuesta = this.repository.crear(entidad);

            return Resultado.ok(`Se creó con éxito la ${this.Entidad.nombre}`, resupuesta);

        } catch (error) {
            return Resultado.error("Ocurrió un error al guardar el registro " + error);
        }
    }

    actualizar(data) {

        const entidad = new this.Entidad(data)

        const validacion = this.validacion(entidad);

        if (!validacion.status) {
            return validacion;
        }

        try {

            const validarExiste = this.repository.validarExiste(entidad.id);

            if (!validarExiste) {
                return Resultado.error("No existe la rutina con el id mencionado");
            }

            const resupuesta = this.repository.actualizar(entidad);

            if (!resupuesta) {
                return Resultado.error("No se actualizo el registro");
            }

            return Resultado.ok(`${this.Entidad.nombre} actualizada con exito"`);

        } catch (error) {
            return Resultado.error("Ocurrio un error a la hora de actualizar el registro: " + error);
        }
    }

    eliminar(id) {
        const resultado = this.#validarID(id);

        if (!resultado.status) {
            return resultado;
        }

        try {
            const validarExiste = this.repository.validarExiste(id);

            if (!validarExiste) {
                return Resultado.error(`No existe la ${this.Entidad.nombre} con el id mencionado`);
            }

            const resultadoEliminacion = this.repository.eliminar(id);

            if (!resultadoEliminacion) {
                return Resultado.error("Ocurrio un error al realizar la eliminación");
            }

            return Resultado.ok(`Se elimino con exito la ${this.Entidad.nombre}`)

        } catch (error) {

        }
    }

    #validarID(rutina) {
        if (!rutina.id) {
            Resultado.error(
                "La rutina no tiene un ID definido"
            );
        }

        return Resultado.ok("ID ok");
    }
}