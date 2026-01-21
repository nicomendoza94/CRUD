// controllers/links.controller.js
const Link = require("../models/linkModel");

exports.create = (req, res) => {
  const { topic_id, url } = req.body;
  Link.createLink(topic_id, url, () => res.redirect("/"));
};

exports.update = (req, res) => {
  const { id } = req.params;
  const { url } = req.body;
  Link.updateLink(id, url, () => res.redirect("/"));
};

exports.delete = (req, res) => {
  Link.deleteLink(req.params.id, () => res.redirect("/"));
};

exports.vote = (req, res) => {
  Link.voteLink(req.params.id, () => res.json({ success: true }));
};
