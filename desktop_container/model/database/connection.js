import Database from 'better-sqlite3';
import path from 'path';

const dbPath = path.join(import.meta.dirname, 'tareas.db');

const db = new Database(dbPath);

export default db;