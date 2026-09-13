const Database = require('better-sqlite3');
const path = require('path');

const dbPath = path.join(__dirname, 'tareas.db');

const db = new Database(dbPath);

module.exports = db;