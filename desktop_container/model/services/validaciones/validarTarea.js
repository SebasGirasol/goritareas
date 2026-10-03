import validarNombre from "./validarNombre.js";
import validarIcono from "./validacionIcono.js";
import Resultado from "../Resultados.js";
import validarFecha from "./validarFecha.js";

export default function validarTarea(tarea) {

    const validaciones = [
        () => validarNombre(tarea.nombre),
        () => validarIcono(tarea.icono),
        () => validarFecha(tarea.fecha, false)
    ];

    for (const validar of validaciones) {

        const resultado = validar();

        if (!resultado.status) {
            return resultado;
        }
    }

    return Resultado.ok("Validado");
}