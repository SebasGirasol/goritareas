import validarNombre from "./validarNombre.js";
import validarIcono from "./validacionIcono.js";
import Resultado from "../Resultados.js";

export default function validarTarea(rutina) {

    const validaciones = [
        () => validarNombre(rutina.nombre),
        () => validarIcono(rutina.icono)
    ];

    for (const validar of validaciones) {

        const resultado = validar();

        if (!resultado.status) {
            return resultado;
        }
    }

    return Resultado.ok("Validado");
}