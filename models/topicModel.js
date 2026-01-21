// models/topicModel.js
const db = require("./database");

function getAllTopics(callback) {
  db.all(`SELECT * FROM topics ORDER BY votes DESC`, callback);
}

function createTopic(title, callback) {
  db.run(`INSERT INTO topics (title) VALUES (?)`, [title], callback);
}

function updateTopic(id, title, callback) {
  db.run(`UPDATE topics SET title = ? WHERE id = ?`, [title, id], callback);
}

function deleteTopic(id, callback) {
  db.run(`DELETE FROM topics WHERE id = ?`, [id], callback);
}

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
