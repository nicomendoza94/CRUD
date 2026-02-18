//importar modelo, conecta el controlador con el modelo
const Link = require("../models/linkModel");

//funcion para crear link
exports.create = (req, res) => {
  const { topic_id, url } = req.body;     //extrae topic_id y url del body que el form envia
  Link.createLink(topic_id, url, () => res.redirect("/"));   //llama al modelo y redirige al inicio
};

//funcion para editar link
exports.update = (req, res) => {
  const { id } = req.params;
  const { url } = req.body;
  Link.updateLink(id, url, () => res.redirect("/"));
};

//funcion para eliminar link
exports.delete = (req, res) => {
  Link.deleteLink(req.params.id, () => res.redirect("/"));
};

//funcion para votar link
exports.vote = (req, res) => {
  Link.voteLink(req.params.id, () => res.json({ success: true }));
};
