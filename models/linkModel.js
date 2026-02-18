//Importar la base de datos
const db = require("./database");

//funcion que trae todos los links
function getAllLinks(callback) {
  db.all(`SELECT * FROM links ORDER BY votes DESC`, callback);   //cuando la bd responde, ejecuta el callback que se le paso
}                                                                //cuando termina, SQLite ejecuta el callback

//inserta un nuevo link en la tabla links
function createLink(topic_id, url, callback) {
  db.run(`INSERT INTO links (topic_id, url) VALUES (?, ?)`, [topic_id, url], callback);
}

//actualiza el url del link que tenga el id especificado
function updateLink(id, url, callback) {
  db.run(`UPDATE links SET url = ? WHERE id = ?`, [url, id], callback);
}

//borra el link con el id que le pases
function deleteLink(id, callback) {
  db.run(`DELETE FROM links WHERE id = ?`, [id], callback);
}

//aumenta en 1 el contador
function voteLink(id, callback) {
  db.run(`UPDATE links SET votes = votes + 1 WHERE id = ?`, [id], callback);
}

module.exports = {
  getAllLinks,
  createLink,
  updateLink,
  deleteLink,
  voteLink,
};
