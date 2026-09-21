import Resultado from "../Resultados.js";

export default function validarIcono(icono) {
    if (!icono || icono.trim().length === 0) {
        return Resultado.error(
            "El campo icono es obligatorio"
        );
    }

    return Resultado.ok("icono ok")
}