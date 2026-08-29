const db = require('./connection')

db.exec(`
    CREATE TABLE IF NOT EXISTS tabla_rutina (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre TEXT NOT NULL,
        color TEXT NOT NULL,
        activa INTEGER NOT NULL,
        icono TEXT NOT NULL,
        diaria INTEGER NOT NULL)`)

db.exec(`
    CREATE TABLE IF NOT EXISTS tabla_actividad (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre TEXT NOT NULL,
        icono TEXT NOT NULL,
        activa INTEGER NOT NULL,
        id_rutina INTEGER NOT NULL,
        FOREIGN KEY(id_rutina) REFERENCES tabla_rutina(id))`)

//DateTime required ISO 8601
db.exec(`
    CREATE TABLE IF NOT EXISTS seguimiento_actividad_dia (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        fecha_actividad TEXT NOT NULL,
        completa INTEGER NOT NULL,
        hora_inicio TEXT,
        hora_fin TEXT,
        id_actividad INTEGER NOT NULL,
        FOREIGN KEY(id_actividad) REFERENCES tabla_actividad(id))`)

db.exec(`
    CREATE TABLE IF NOT EXISTS tareas (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre TEXT NOT NULL,
        completa INTEGER NOT NULL,
        fecha TEXT)`)