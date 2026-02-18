//se crea ruta, sirve para agrupar rutas
const router = require("express").Router();
//se importa el controlador que maneja la logica cuando se accede a esta ruta
const topicsController = require("../controllers/topics.controller");

//rutas para crear, actualizar, eliminar y votar temas
router.post("/", topicsController.create);
router.put("/:id", topicsController.update);
router.delete("/:id", topicsController.delete);
router.post("/:id/vote", topicsController.vote);

module.exports = router;
