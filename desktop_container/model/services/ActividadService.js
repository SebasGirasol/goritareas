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

    #validarID(rutina) {
        if (!rutina.id) {
            Resultado.error(
                "La rutina no tiene un ID definido"
            );
        }

        return true;
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