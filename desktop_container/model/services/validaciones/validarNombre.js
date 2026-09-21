import Resultado from "../Resultados.js";

export default function validarNombre(nombre) {

    if (!nombre || nombre.trim().length === 0) {
        return Resultado.error(
            "El campo nombre es obligatorio"
        );
    }

    if (nombre.length > 100) {
        return Resultado.error(
            "El nombre no puede superar los 100 caracteres"
        );
    }

    return Resultado.ok("Nombre ok")
}