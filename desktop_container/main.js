import { app, BrowserWindow, ipcMain } from "electron";
import db from './model/database/connection.js'
import { inicializarBD } from "./model/database/schemas.js";
import RutinaRepository from "./model/repositories/RutinaRepository.js";
import { rutina } from "./model/devFiles/mocks.js";
import RutinaService from "./model/services/ActividadService.js";
import ActividadRutinaRepository from "./model/repositories/ActividadRutinaRepository.js";

app.whenReady().then(() => {

  inicializarBD(db);
  const rutinaRepository = new RutinaRepository(db);
  const repositoryRutinaActividad = new ActividadRutinaRepository(db);
  const rutinaService = new RutinaService(rutinaRepository, repositoryRutinaActividad);

  console.log(rutinaService.eliminarRutina(3))

  const win = new BrowserWindow({
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  win.loadFile("index.html");
});