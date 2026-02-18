//importar modelo
const Topic = require("../models/topicModel");

//funcion que se ejecuta cuando se quiere crear un tema
exports.create = (req, res) => {
  const { title } = req.body;       //esto se llama destructuring, para extraer propiedades de un objeto
  Topic.createTopic(title, () => res.redirect("/"));    //llama al modelo, y redirige al endpoint
};

//funcion que se ejecuta cuando se quiere editar un tema
exports.update = (req, res) => {
  const { id } = req.params;    //viene de la url
  const { title } = req.body;    //viene del formulario
  Topic.updateTopic(id, title, () => res.redirect("/"));   //llama al modelo, y redirige al endpoint
};

////funcion que se ejecuta cuando se quiere eliminar un tema
exports.delete = (req, res) => {
  Topic.deleteTopic(req.params.id, () => res.redirect("/"));  //llama al modelo, y redirige al endpoint
};

//funcion para votar
exports.vote = (req, res) => {
  Topic.voteTopic(req.params.id, () => res.json({ success: true }));   //responde con json y confirma que funciono
};
