import { app, BrowserWindow, ipcMain } from "electron";
import db from './model/database/connection.js'
import { inicializarBD } from "./model/database/schemas.js";
import RutinaRepository from "./model/repositories/RutinaRepository.js";
import { rutina } from "./model/devFiles/mocks.js";

app.whenReady().then(() => {

  inicializarBD(db);
  const rutinaRepository = new RutinaRepository(db);

  console.log(rutinaRepository.eliminar(1))

  const win = new BrowserWindow({
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  win.loadFile("index.html");
});