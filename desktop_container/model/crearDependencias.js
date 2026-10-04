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
import { convertirActividad, convertirRutina, convertirSeguimiento, convertirTarea } from "./services/conversiones/conversiones.js";


export function crearDependencias(db) {

    const rutinaRepository = new RutinaRepository(db);
    const actividadRepository = new ActividadRepository(db);
    const actividadRutinaRepository = new ActividadRutinaRepository(db);
    const tareaRepository = new TareaRepository(db);
    const seguimientoRepository = new SeguimientoActividadRepository(db);


    const rutinaService =
        new ServiceRelacional(
            Rutina,
            rutinaRepository,
            actividadRutinaRepository,
            validarRutina,
            convertirRutina
        );

    const actividadService =
        new ServiceRelacional(
            Actividad,
            actividadRepository,
            actividadRutinaRepository,
            validarActividad,
            convertirActividad
        );

    const tareaService =
        new Service(
            Tarea,
            tareaRepository,
            validarTarea,
            convertirTarea
        );

    const seguimientoService =
        new Service(
            SeguimientoActividad,
            seguimientoRepository,
            validarSeguimientoActividad,
            convertirSeguimiento
        );


    return {
        rutinaService,
        actividadService,
        tareaService,
        seguimientoService
    };
}