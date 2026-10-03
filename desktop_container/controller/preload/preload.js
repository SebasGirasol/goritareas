const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {

    rutina: {

        crear: (datos) =>
            ipcRenderer.invoke("rutina:crear", datos),

        obtener: (id) =>
            ipcRenderer.invoke("rutina:obtener", id),

        obtenerTodas: () =>
            ipcRenderer.invoke("rutina:obtenerTodas"),

        actualizar: (datos) =>
            ipcRenderer.invoke("rutina:actualizar", datos),

        eliminar: (id) =>
            ipcRenderer.invoke("rutina:eliminar", id)

    }

});