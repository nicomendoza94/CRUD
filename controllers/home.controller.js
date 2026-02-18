//importar modelos
const Topic = require("../models/topicModel");
const Link = require("../models/linkModel");

//este archivo exporta la funcion index
//esta funcion responde a get para mostrar la pag, no hay datos que leer desde req
exports.index = (req, res) => {
  Topic.getAllTopics((err, topics) => {
    if (err) return res.status(500).send("DB Error");   //si la bd falla devuelve un mensaje de error

    Link.getAllLinks((err, links) => {
      if (err) return res.status(500).send("DB Error");

      // Unir links a sus topics
      const topicsWithLinks = topics.map(t => ({     //recorre cada topic y crea un nuevo objeto
        ...t,                                       //copia todas las propiedades del topic
        links: links.filter(l => l.topic_id === t.id)   //filtralos links que topic_id coincida con el id del topic actual
      }));

      res.render("index", { topics: topicsWithLinks });    //se renderiza los datos de la bd
    });
  });
};
