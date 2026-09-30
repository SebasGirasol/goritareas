import { app, BrowserWindow, ipcMain } from "electron";
import db from './model/database/connection.js'
import { inicializarBD } from "./model/database/schemas.js";
import RutinaRepository from "./model/repositories/RutinaRepository.js";
import { rutina } from "./model/devFiles/mocks.js";
import ActividadRutinaRepository from "./model/repositories/ActividadRutinaRepository.js";
import Service from "./model/services/Service.js";
import { Rutina } from "./model/entities/rutina.js";
import validarRutina from "./model/services/validaciones/validarRutina.js";

app.whenReady().then(() => {

  inicializarBD(db);
  const rutinaRepository = new RutinaRepository(db);
  const repositoryRutinaActividad = new ActividadRutinaRepository(db);
  const rutinaService = new Service(Rutina, rutinaRepository, repositoryRutinaActividad, validarRutina)

  console.log(rutinaService.nuevaVersion(rutina))

  const win = new BrowserWindow({
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  win.loadFile("index.html");
});