export function convertirRutina(rutina) {
    return {
        ...rutina,
        activa: Boolean(rutina.activa),
        diaria: Boolean(rutina.diaria)
    }
}

export function convertirActividad(actividad) {
    return {
        ...actividad,
        activa: Boolean(actividad.activa)
    }
}

export function convertirTarea(tarea) {
    return {
        ...tarea,
        completa: Boolean(tarea.completa)
    }
}

export function convertirSeguimiento(seguimiento) {
    return {
        ...seguimiento,
        completa: Boolean(seguimiento.completa)
    }
}