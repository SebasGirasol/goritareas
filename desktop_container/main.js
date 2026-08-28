import { app, BrowserWindow, ipcMain } from "electron";
import { crearUsuario } from "./database.js";

app.whenReady().then(() => {
  const win = new BrowserWindow({
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  win.loadFile("index.html");
});