import { Rutina } from "./entities/rutina.js";
import { Actividad } from "./entities/actividad.js";
import { Tarea } from "./entities/tarea.js";
import { SeguimientoActividad } from "./entities/seguimiento_actividad.js";
import ActividadRepository from "./repositories/ActividadRepository.js";
import ActividadRutinaRepository from "./repositories/ActividadRutinaRepository.js";
import RutinaRepository from "./repositories/RutinaRepository.js";
import ServiceRelacional from "./services/ServicerRelacional.js";
import validarActividad from "./services/validaciones/validarActividad.js";
import validarRutina from "./services/validaciones/validarRutina.js";
import TareaRepository from "./repositories/TareaRepository.js";
import Service from "./services/Service.js";
import validarTarea from "./services/validaciones/validarTarea.js";
import SeguimientoActividadRepository from "./repositories/SeguimientoActividadRepository.js";
import validarSeguimientoActividad from "./services/validaciones/validarSeguimientoActividad.js";


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
    const seguimientoService = new Service(SeguimientoActividad, seguimientoRepository, validarSeguimientoActividad);

    return {
        tareaService
    }
}