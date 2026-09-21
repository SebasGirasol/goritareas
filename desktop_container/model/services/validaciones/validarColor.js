import Resultado from "../Resultados.js";

export default function validarColor(color) {

    if (!color) {
        return Resultado.error(
            "El campo color es obligatorio"
        );
    }

    const validacionHex = /^#(?:[0-9A-Fa-f]{3}|[0-9A-Fa-f]{4}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/;

    if (!validacionHex.test(color)) {
        return Resultado.error(
            "El color no cumple con el formato"
        );
    }

    return Resultado.ok("color ok")
}