import { Rutina } from '../entities/rutina.js';
import RutinaRepository from '../repositories/RutinaRepository.js'
import Resultado from './Resultados.js';
import validarRutina from './validaciones/validarRutina.js';

export default class RutinaService {
    /**
     * @param {RutinaRepository} repository
     */
    constructor(repository) {
        this.repository = repository;
    }

    crearRutina(data) {

        const rutina = this.#convertirRutina(data);

        const validacion = validarRutina(rutina);

        if (!validacion.status) {
            console.log("error")
            return validacion;
        }

        try {
            const resupuesta = this.repository.crear(rutina);

            return Resultado.ok("Se creó con éxito la rutina", resupuesta);

        } catch (error) {
            return Resultado.error("Ocurrió un error al guardar el registro " + error);
        }
    }

    actualizarRutina(data) {

        const rutina = this.#convertirRutina(data);

        const validacion = validarRutina(rutina);

        if (!validacion.status) {
            return validacion;
        }

        try {

            const validarExiste = this.repository.validarExiste(rutina.id);

            if(!validarExiste) {
                return Resultado.error("No existe la rutina con el id mencionado");
            }

            const resupuesta = this.repository.actualizar(rutina);

            if(!resupuesta) {
                return Resultado.error("No se actualizo el registro");
            }

            return Resultado.ok("Rutina actualizada con exito");

        } catch (error) {
            return Resultado.error("Ocurrio un error a la hora de actualizar el registro: " + error);
        }
    }

    nuevaVersion(data) {

        const rutina = this.#convertirRutina(data);

        const validacion = validarRutina(rutina);

        if (!validacion.status) {
            return validacion;
        }

        try {
            const validarExiste = this.repository.validarExiste(rutina.id);

            if(!validarExiste) {
                return Resultado.error("No existe la rutina con el id mencionado");
            }

            const rutinaCreada = this.repository.crear(rutina);

            rutina.activa = false;

            const respuestaActualización = this.repository.actualizar(rutina);

            if(!respuestaActualización) {
                this.repository.eliminar(rutinaCreada.id);
                return Resultado.error("No se actualizo una version de la rutina");
            }

            return Resultado.ok("Se creo la nueva versión de la rutina", rutinaCreada)

        } catch (error) {
            return Resultado.error("Ocurrio un error a la hora de cambiar la versión: " + error);
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

    #convertirRutina(data) {
        return new Rutina(
            data.id,
            data.nombre,
            data.color,
            data.activa,
            data.icono,
            data.diaria
        );
    }
}