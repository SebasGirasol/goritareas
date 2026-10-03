import Resultado from "../Resultados.js";

export default function validarHora(hora) {

    const validacionHex = /^(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d$/;

    if (!validacionHex.test(hora)) {
        return Resultado.error(
            "El campo hora no cumple con el formato o no esta en el rango 00:00:00 - 23:59:59"
        );
    }

    if (typeof hora !== "string") {
        return {
            status: false,
            message: "La hora debe ser un texto"
        }
    }

    return Resultado.ok("hora ok")
}