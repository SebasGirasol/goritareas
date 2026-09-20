export function inicializarBD(db) {
    db.exec(`
    CREATE TABLE IF NOT EXISTS tabla_rutina (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre TEXT NOT NULL,
            color TEXT NOT NULL,
            activa INTEGER NOT NULL,
            icono TEXT NOT NULL,
            diaria INTEGER NOT NULL
        )
    `)

    db.exec(`
        CREATE TABLE IF NOT EXISTS tabla_actividad (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre TEXT NOT NULL,
            icono TEXT NOT NULL,
            activa INTEGER NOT NULL
        )
    `)

    db.exec(`
        CREATE TABLE IF NOT EXISTS actividad_rutina (
            id_rutina INTEGER NOT NULL,
            id_actividad INTEGER NOT NULL,
            PRIMARY KEY(id_rutina, id_actividad),
            FOREIGN KEY(id_rutina) REFERENCES tabla_rutina(id)
            FOREIGN KEY(id_actividad) REFERENCES tabla_actividad(id)
        )
    `)

    /* 
        Se guarda el id de la rutina para hacer referencia historica del enlace, así este
        desactivada
    */
    db.exec(`
        CREATE TABLE IF NOT EXISTS seguimiento_actividad_dia (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            fecha_actividad TEXT NOT NULL,
            completa INTEGER NOT NULL,
            hora_inicio TEXT,
            hora_fin TEXT,
            id_actividad INTEGER NOT NULL,
            id_rutina INTEGER NOT NULL,
            FOREIGN KEY(id_actividad) REFERENCES tabla_actividad(id),
            FOREIGN KEY(id_rutina) REFERENCES tabla_rutina(id)
        )
    `)

    db.exec(`
        CREATE TABLE IF NOT EXISTS tareas (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre TEXT NOT NULL,
            completa INTEGER NOT NULL,
            fecha TEXT
        )`
    )

    return db
}