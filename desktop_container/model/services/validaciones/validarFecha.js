import Resultado from "../Resultados.js";

export default function validarFecha(fecha, requerido) {

    if(!requerido) {
        return Resultado.ok("fecha ok")
    }

    if (!fecha) {
        return Resultado.error(
            "El campo fecha es obligatorio"
        );
    }

    if (typeof fecha !== "string") {
        return {
            status: false,
            message: "La fecha debe ser un texto"
        }
    }

    const validacionHex = /^\d{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12]\d|3[01])$/;

    if (!validacionHex.test(fecha)) {
        return Resultado.error(
            "El campo fecha no cumple con el formato AAAA-MM-DD"
        );
    }

    return Resultado.ok("fecha ok")
}