//se importa sqlite
const sqlite3 = require("sqlite3").verbose();  //ayuda a ver mas info de los errores y depuracion si algo falla
const path = require("path");    //sirve para trabajar con rutas de archivos

const dbPath = path.join(__dirname, "..", "challenge.db");   //carpeta donde esta el archivo models
const db = new sqlite3.Database(dbPath);   //crea o abre el archivo challenge.db

db.serialize(() => {    //para que las consultas se ejecutan en orden
  db.run(`
    CREATE TABLE IF NOT EXISTS topics (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      votes INTEGER DEFAULT 0
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS links (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      topic_id INTEGER NOT NULL,
      url TEXT NOT NULL,
      votes INTEGER DEFAULT 0,
      FOREIGN KEY(topic_id) REFERENCES topics(id) ON DELETE CASCADE
    )
  `);
});

module.exports = db;
