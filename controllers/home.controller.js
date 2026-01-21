// controllers/home.controller.js
const Topic = require("../models/topicModel");
const Link = require("../models/linkModel");

exports.index = (req, res) => {
  Topic.getAllTopics((err, topics) => {
    if (err) return res.status(500).send("DB Error");

    Link.getAllLinks((err, links) => {
      if (err) return res.status(500).send("DB Error");

      // Unir links a sus topics
      const topicsWithLinks = topics.map(t => ({
        ...t,
        links: links.filter(l => l.topic_id === t.id)
      }));

      res.render("index", { topics: topicsWithLinks });
    });
  });
};
