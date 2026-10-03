import { app, BrowserWindow, ipcMain } from "electron";
import db from "./model/database/connection.js"
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { crearDependencias } from "./model/crearDependencias.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.whenReady().then(() => {

  const {
    rutinaService,
    actividadService,
    tareaService,
    seguimientoService
  } = crearDependencias(db)

  const win = new BrowserWindow({
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      preload: path.join(__dirname, 'controller', 'preload', 'preload.js')
    }
  });

  win.loadURL('http://localhost:5173');
});