import { Rutina } from "../model/entities/rutina.js";
import ActividadRutinaRepository from "../model/repositories/ActividadRutinaRepository.js";
import RutinaRepository from "../model/repositories/RutinaRepository.js";
import ServiceRelacional from "../model/services/ServicerRelacional.js";
import validarRutina from "../model/services/validaciones/validarRutina.js";


export function crearDependenciasRutina(db) {

    const rutinaRepository = new RutinaRepository(db);
    const actividadRutinaRepository = new ActividadRutinaRepository(db);
    const rutinaService = new ServiceRelacional(Rutina,rutinaRepository, actividadRutinaRepository, validarRutina);

    return {
        rutinaService
    }
}