import Resultado from "../Resultados.js";
import validarFecha from "./validarFecha.js";
import validarHora from "./validarHora.js";

export default function validarSeguimientoActividad(seguimiento) {

    const validaciones = [
        () => validarFecha(seguimiento.fecha, true),
        () => validarHora(seguimiento.hora_inicio),
        () => validarHora(seguimiento.hora_fin)
    ];

    for (const validar of validaciones) {

        const resultado = validar();

        if (!resultado.status) {
            return resultado;
        }
    }

    return Resultado.ok("Validado");
}