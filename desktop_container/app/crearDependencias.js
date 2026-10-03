import { Rutina } from "../model/entities/rutina.js";
import { Actividad } from "../model/entities/actividad.js";
import { Tarea } from "../model/entities/tarea.js";
import { SeguimientoActividad } from "../model/entities/seguimiento_actividad.js";
import ActividadRepository from "../model/repositories/ActividadRepository.js";
import ActividadRutinaRepository from "../model/repositories/ActividadRutinaRepository.js";
import RutinaRepository from "../model/repositories/RutinaRepository.js";
import ServiceRelacional from "../model/services/ServicerRelacional.js";
import validarActividad from "../model/services/validaciones/validarActividad.js";
import validarRutina from "../model/services/validaciones/validarRutina.js";
import TareaRepository from "../model/repositories/TareaRepository.js";
import Service from "../model/services/Service.js";
import validarTarea from "../model/services/validaciones/validarTarea.js";
import SeguimientoActividadRepository from "../model/repositories/SeguimientoActividadRepository.js";
import validarSeguimientoActividad from "../model/services/validaciones/validarSeguimientoActividad.js";


export function crearDependenciasRutina(db) {

    const rutinaRepository = new RutinaRepository(db);
    const actividadRutinaRepository = new ActividadRutinaRepository(db);
    const rutinaService = new ServiceRelacional(Rutina, rutinaRepository, actividadRutinaRepository, validarRutina);

    return {
        rutinaService
    }
}

export function crearDependenciasActividad(db) {
    const actividadRepository = new ActividadRepository(db);
    const actividadRutinaRepository = new ActividadRutinaRepository(db);
    const actividadService = new ServiceRelacional(Actividad, actividadRepository, actividadRutinaRepository, validarActividad);

    return {
        actividadService
    }
}

export function crearDependenciasTarea(db) {
    const tareaRepository = new TareaRepository(db);
    const tareaService = new Service(Tarea, tareaRepository, validarTarea);

    return {
        tareaService
    }
}

export function crearDependenciasSeguimiento(db) {
    const seguimientoRepository = new SeguimientoActividadRepository(db);
    const tareaService = new Service(SeguimientoActividad, seguimientoRepository, validarSeguimientoActividad);

    return {
        tareaService
    }
}