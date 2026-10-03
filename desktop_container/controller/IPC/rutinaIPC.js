import { ipcMain } from "electron";

export default function registrarRutinaIPC(rutinaService) {

    ipcMain.handle("rutina:crear", (_, datos) => {
        return rutinaService.crear(datos);
    });

    ipcMain.handle("rutina:obtener", (_, id) => {
        return rutinaService.obtener(id);
    });

    ipcMain.handle("rutina:obtenerTodas", () => {
        return rutinaService.obtenerTodas();
    });

    ipcMain.handle("rutina:actualizar", (_, datos) => {
        return rutinaService.actualizar(datos);
    });

    ipcMain.handle("rutina:eliminar", (_, id) => {
        return rutinaService.eliminar(id);
    });
}