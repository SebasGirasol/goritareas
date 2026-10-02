import Service from "./Service.js";
import Resultado from './Resultados.js';

export default class ServiceRelacional extends Service {

    constructor(Entidad, repository, repositoryRelacion, validaciones) {
        super(Entidad, repository, validaciones);
        this.repositoryRelacion = repositoryRelacion;
    }

    nuevaVersion(data) {

        const entidad = new this.Entidad(data)

        const validacion = this.validacion(entidad);

        if (!validacion.status) {
            return validacion;
        }
        
        try {
            const validarExiste = this.repository.validarExiste(entidad.id);
 
            if(!validarExiste) {
                return Resultado.error(`No existe la ${this.Entidad.nombre} con el id mencionado`);
            }

            if(entidad.id_primera_version == null) {
                entidad.id_primera_version = entidad.id
            }

            const entidadCreada = this.repository.crear(entidad);

            entidad.alternarActivo();

            const respuestaActualización = this.repository.actualizar(entidad);

            if(!respuestaActualización) {
                this.repository.eliminar(entidadCreada.id);
                return Resultado.error(`No se actualizo una version de la ${this.Entidad.nombre}`);
            }

            return Resultado.ok(`Se creo la nueva versión de la ${this.Entidad.nombre}`, entidadCreada);

        } catch (error) {
            return Resultado.error("Ocurrio un error a la hora de cambiar la versión: " + error);
        }
    }

    eliminar(id) {
        const resultado = this.#validarID(id);

        if(!resultado.status) {
            return resultado;
        }

        try {
            const validarExiste = this.repository.validarExiste(id);

            if(!validarExiste) {
                return Resultado.error(`No existe la ${this.Entidad.nombre} con el id mencionado`);
            }

            const validarTieneActividades = this.repositoryRelacion.tieneActividadesRelacionadas(id);

            if(validarTieneActividades) {
                return Resultado.error(`La ${this.Entidad.nombre} tiene relaciones, no es posible eliminarla`);
            }

            const resultadoEliminacion = this.repository.eliminar(id);

            if(!resultadoEliminacion) {
                return Resultado.error("Ocurrio un error al realizar la eliminación");
            }

            return Resultado.ok(`Se elimino con exito la ${this.Entidad.nombre}`)

        } catch(error) {

        }
    }

    asignar(id_rutina, id_tarea) {
        try {
            const resultado = this.repositoryRelacion.asignar(id_rutina, id_tarea);

            if(!resultado) {
                return Resultado.error("Ocurrio un error al hacer la relacion")
            }

            return Resultado.ok("Se ha asignado la tarea a la rutina")

        } catch(error) {
            return Resultado.error("Ocurrio un error al intentar realizar el registo: " + error)
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