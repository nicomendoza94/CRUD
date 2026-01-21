// models/linkModel.js
const db = require("./database");

function getAllLinks(callback) {
  db.all(`SELECT * FROM links ORDER BY votes DESC`, callback);
}

function createLink(topic_id, url, callback) {
  db.run(`INSERT INTO links (topic_id, url) VALUES (?, ?)`, [topic_id, url], callback);
}

function updateLink(id, url, callback) {
  db.run(`UPDATE links SET url = ? WHERE id = ?`, [url, id], callback);
}

function deleteLink(id, callback) {
  db.run(`DELETE FROM links WHERE id = ?`, [id], callback);
}

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
