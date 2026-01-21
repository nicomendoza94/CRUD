// controllers/topics.controller.js
const Topic = require("../models/topicModel");

exports.create = (req, res) => {
  const { title } = req.body;
  Topic.createTopic(title, () => res.redirect("/"));
};

exports.update = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  Topic.updateTopic(id, title, () => res.redirect("/"));
};

exports.delete = (req, res) => {
  Topic.deleteTopic(req.params.id, () => res.redirect("/"));
};

exports.vote = (req, res) => {
  Topic.voteTopic(req.params.id, () => res.json({ success: true }));
};
