const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('api', {
    rutinas: {
        crear: (datos) =>
            "ola"
    }
});