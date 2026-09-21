import validarNombre from "./validarNombre.js";
import validarColor from "./validarColor.js";
import validarIcono from "./validacionIcono.js";
import Resultado from "../Resultados.js";

export default function validarRutina(rutina) {

    const validaciones = [
        () => validarNombre(rutina.nombre),
        () => validarColor(rutina.color),
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