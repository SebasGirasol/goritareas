import { app, BrowserWindow, ipcMain } from "electron";
import db from './model/database/connection.js'
import { inicializarBD } from "./model/database/schemas.js";
import RutinaRepository from "./model/repositories/RutinaRepository.js";
import { rutina } from "./model/devFiles/mocks.js";
import RutinaService from "./model/services/ActividadService.js";

app.whenReady().then(() => {

  inicializarBD(db);
  const rutinaRepository = new RutinaRepository(db);
  const rutinaService = new RutinaService(rutinaRepository);

  console.log(rutinaService.actualizarRutina(rutina))

  const win = new BrowserWindow({
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  win.loadFile("index.html");
});