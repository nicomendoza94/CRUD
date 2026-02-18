//Importar la base de datos
const db = require("./database");

//funcion que trae todos los topics
function getAllTopics(callback) {
  db.all(`SELECT * FROM topics ORDER BY votes DESC`, callback);
}

//inserta un nuevo link en la tabla topics
function createTopic(title, callback) {
  db.run(`INSERT INTO topics (title) VALUES (?)`, [title], callback);
}

//actualiza el url del topic que tenga el id especificado
function updateTopic(id, title, callback) {
  db.run(`UPDATE topics SET title = ? WHERE id = ?`, [title, id], callback);
}

//borra el topic con el id que le pases
function deleteTopic(id, callback) {
  db.run(`DELETE FROM topics WHERE id = ?`, [id], callback);
}

//aumenta en 1 el contador
function voteTopic(id, callback) {
  db.run(`UPDATE topics SET votes = votes + 1 WHERE id = ?`, [id], callback);
}

module.exports = {
  getAllTopics,
  createTopic,
  updateTopic,
  deleteTopic,
  voteTopic,
};
